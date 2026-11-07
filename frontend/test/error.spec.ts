// SPDX-License-Identifier: AGPL-3.0-or-later
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Error from "../app/error.vue";

const errorMessage = (
  name = "Error",
  statusCode = 404,
  message = "Page not found"
) => {
  return { name, statusCode, message };
};

//Displays HTTP status code, error message, and checks if home recovery button existing.
describe("Error.vue", () => {
  it("displays the error code and message", () => {
    const wrapper = mount(Error, {
      props: {
        error: errorMessage(),
      },
      global: {
        stubs: {
          HeaderWebsite: { template: "<div />" },
          FooterWebsite: { template: "<div />" },
          BtnRouteInternal: { template: '<button data-testid="home-btn" />' },
        },
      },
    });
    const text = wrapper.text();

    expect(text).toContain("404");
    expect(text).toContain("Page not found");
  });

  it("Checks so that the home recovery button exists", () => {
    const wrapper = mount(Error, {
      props: {
        error: errorMessage(),
      },
      global: {
        stubs: {
          HeaderWebsite: { template: "<div />" },
          FooterWebsite: { template: "<div />" },
          BtnRouteInternal: { template: '<button data-testid="home-btn" />' },
        },
      },
    });
    const homeButton = wrapper.find('[data-testid="home-btn"]');
    expect(homeButton.exists()).toBe(true);
  });
});
