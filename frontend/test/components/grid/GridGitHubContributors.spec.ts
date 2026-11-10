// SPDX-License-Identifier: AGPL-3.0-or-later
import { mockNuxtImport } from "@nuxt/test-utils/runtime";
import { fireEvent, screen, waitFor } from "@testing-library/vue";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import GridGitHubContributors from "../../../app/components/grid/GridGitHubContributors.vue";
import render from "../../render";

mockNuxtImport("useLocalePath", () => () => (path: string) => path);

interface MockContributor {
  avatar_url: string;
  html_url: string;
  login: string;
  contributions: number;
}

const makeContributor = (login: string, contributions: number) => ({
  avatar_url: `https://avatars.example.com/${login}.png`,
  html_url: `https://github.com/${login}`,
  login,
  contributions,
});

// Contributors are sorted by contribution count, so user0 has the most.
const makeContributors = (count: number): MockContributor[] =>
  Array.from({ length: count }, (_, index) =>
    makeContributor(`user${index}`, 1000 - index)
  );

// The component requests each Scribe repository in turn.
const mockContributorResponses = (...responses: MockContributor[][]) => {
  const fetchMock = vi.fn((_url: string) => {
    const data = responses.shift() ?? [];
    return Promise.resolve({ json: () => Promise.resolve(data) });
  });
  vi.stubGlobal("fetch", fetchMock);

  return fetchMock;
};

const shownLogins = (container: Element) =>
  [...container.querySelectorAll("li a p")].map((p) => p.textContent?.trim());

describe("GridGitHubContributors", () => {
  let errorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  // MARK: Fetching

  describe("fetching", () => {
    it("requests the contributors of every Scribe repository", async () => {
      const fetchMock = mockContributorResponses();

      await render(GridGitHubContributors);
      await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(8));

      const urls = fetchMock.mock.calls.map((call) => String(call[0]));
      expect(urls[0]).toBe(
        "https://api.github.com/repos/scribe-org/Scribe-Android/contributors?per_page=100"
      );
      expect(urls).toContain(
        "https://api.github.com/repos/scribe-org/scri.be/contributors?per_page=100"
      );
      expect(urls).toContain(
        "https://api.github.com/repos/scribe-org/Organization/contributors?per_page=100"
      );
    });
  });

  // MARK: Contributors

  describe("contributors", () => {
    it("renders the thirty top contributors as profile links", async () => {
      mockContributorResponses(makeContributors(35));

      const { container } = await render(GridGitHubContributors);
      await waitFor(() =>
        expect(container.querySelectorAll("li a")).toHaveLength(30)
      );

      const first = container.querySelector("li a");
      expect(first?.getAttribute("href")).toBe("https://github.com/user0");
      expect(first?.getAttribute("target")).toBe("_blank");
      expect(shownLogins(container)[0]).toBe("user0");
      expect(shownLogins(container)[29]).toBe("user29");
    });

    it("renders the avatar with its localized alt text", async () => {
      mockContributorResponses(makeContributors(35));

      const { container } = await render(GridGitHubContributors);
      await waitFor(() =>
        expect(container.querySelectorAll("li img")).toHaveLength(30)
      );

      const avatar = container.querySelector("li img");
      expect(avatar?.getAttribute("src")).toBe(
        "https://avatars.example.com/user0.png"
      );
      expect(avatar?.getAttribute("alt")).toMatch(
        /^Navigate to the GitHub profile of/
      );
    });

    it("sorts contributors by their total contributions", async () => {
      const unordered = [
        makeContributor("low", 1),
        ...makeContributors(30),
        makeContributor("high", 5000),
      ];
      mockContributorResponses(unordered);

      const { container } = await render(GridGitHubContributors);
      await waitFor(() => expect(shownLogins(container)).toHaveLength(30));

      expect(shownLogins(container)[0]).toBe("high");
      expect(shownLogins(container)).not.toContain("low");
    });

    it("adds up the contributions of a person across repositories", async () => {
      mockContributorResponses(makeContributors(31), [
        makeContributor("user30", 5000),
      ]);

      const { container } = await render(GridGitHubContributors);
      await waitFor(() => expect(shownLogins(container)).toHaveLength(30));

      const logins = shownLogins(container);
      expect(logins[0]).toBe("user30");
      expect(logins.filter((login) => login === "user30")).toHaveLength(1);
    });
  });

  // MARK: Show More

  describe("show more", () => {
    it("renders the show more button when there are more contributors", async () => {
      mockContributorResponses(makeContributors(35));

      await render(GridGitHubContributors);

      const button = await screen.findByRole("button", {
        name: "Show more Scribe GitHub contributors",
      });
      await waitFor(() => expect(button.textContent).toContain("Show more"));
    });

    it("shows all contributors and hides the button after loading more", async () => {
      mockContributorResponses(makeContributors(35));

      const { container } = await render(GridGitHubContributors);
      const button = await screen.findByRole("button", {
        name: "Show more Scribe GitHub contributors",
      });
      await waitFor(() => expect(shownLogins(container)).toHaveLength(30));

      await fireEvent.click(button);

      await waitFor(() => expect(shownLogins(container)).toHaveLength(35));
      expect(screen.queryByRole("button")).toBeNull();
    });

    it("keeps the button while more contributors remain", async () => {
      mockContributorResponses(makeContributors(70));

      const { container } = await render(GridGitHubContributors);
      const button = await screen.findByRole("button", {
        name: "Show more Scribe GitHub contributors",
      });
      await waitFor(() => expect(shownLogins(container)).toHaveLength(30));

      await fireEvent.click(button);

      await waitFor(() => expect(shownLogins(container)).toHaveLength(60));
      expect(screen.queryByRole("button")).not.toBeNull();
    });
  });

  // MARK: Loading

  describe("loading", () => {
    it("shows the loading label until the contributors arrive", async () => {
      let release: () => void = () => {};
      const gate = new Promise<void>((resolve) => {
        release = resolve;
      });
      vi.stubGlobal(
        "fetch",
        vi.fn(() => gate.then(() => ({ json: () => Promise.resolve([]) })))
      );

      await render(GridGitHubContributors);

      expect(screen.getByText("Loading...")).toBeDefined();
      expect(screen.queryByText("Show more")).toBeNull();

      release();
      await waitFor(() => expect(screen.queryByText("Loading...")).toBeNull());
    });
  });

  // MARK: Fallbacks

  describe("fallbacks", () => {
    it("renders no contributors and no button for an empty list", async () => {
      const fetchMock = mockContributorResponses();

      const { container } = await render(GridGitHubContributors);
      await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(8));
      await waitFor(() => expect(screen.queryByText("Loading...")).toBeNull());

      expect(container.querySelectorAll("li a")).toHaveLength(0);
      expect(screen.queryByRole("button")).toBeNull();
    });

    it("logs the error and stops loading when the request fails", async () => {
      vi.stubGlobal(
        "fetch",
        vi.fn(() => Promise.reject(new Error("network down")))
      );

      const { container } = await render(GridGitHubContributors);

      await waitFor(() => expect(errorSpy).toHaveBeenCalled());
      await waitFor(() => expect(screen.queryByText("Loading...")).toBeNull());
      expect(container.querySelectorAll("li a")).toHaveLength(0);
    });
  });

  // MARK: Layout

  describe("layout", () => {
    it("aligns the list to the start on wide screens by default", async () => {
      mockContributorResponses();

      const { container } = await render(GridGitHubContributors);

      const list = container.querySelector("ul");
      expect(list?.classList.contains("flex-wrap")).toBe(true);
      expect(list?.classList.contains("md:justify-normal")).toBe(true);
    });

    it("keeps the list centered when alwaysCentered is set", async () => {
      mockContributorResponses();

      const { container } = await render(GridGitHubContributors, {
        props: { alwaysCentered: true },
      });

      const list = container.querySelector("ul");
      expect(list?.classList.contains("justify-center")).toBe(true);
      expect(list?.classList.contains("md:justify-normal")).toBe(false);
    });
  });
});
