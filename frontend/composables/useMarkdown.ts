// composables/useMarkdown.ts
import MarkdownIt from "markdown-it";

export function useMarkdown(): MarkdownIt {
  const md = new MarkdownIt();

  md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    if (token.tag === "h2") {
      return '<div class="changelog-version-section"><h2 class="sticky-header">';
    }
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.heading_close = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    if (token.tag === "h2") {
      return "</h2></div>";
    }
    return self.renderToken(tokens, idx, options);
  };

  return md;
}
