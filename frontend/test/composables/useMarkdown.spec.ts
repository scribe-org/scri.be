// SPDX-License-Identifier: AGPL-3.0-or-later
import { describe, expect, it } from "vitest";

import { useMarkdown } from "../../app/composables/useMarkdown";

describe("useMarkdown", () => {
  it("wraps h2 headings in changelog-version-section div with sticky-header class", () => {
    const md = useMarkdown();
    const result = md.render("## Version 1.0.0");

    expect(result).toContain(
      '<div class="changelog-version-section"><h2 class="sticky-header">Version 1.0.0</h2></div>'
    );
  });

  it("renders other headings without changelog-version-section wrapper", () => {
    const md = useMarkdown();
    const h1Result = md.render("# Main Title");
    const h3Result = md.render("### Subtitle");

    expect(h1Result).toBe("<h1>Main Title</h1>\n");
    expect(h1Result).not.toContain("changelog-version-section");
    expect(h3Result).toBe("<h3>Subtitle</h3>\n");
    expect(h3Result).not.toContain("changelog-version-section");
  });

  it("renders standard markdown content properly", () => {
    const md = useMarkdown();
    const result = md.render("This is **bold** text and *italic* text.");

    expect(result).toBe(
      "<p>This is <strong>bold</strong> text and <em>italic</em> text.</p>\n"
    );
  });
});
