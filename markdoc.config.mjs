import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";
import shiki from "@astrojs/markdoc/shiki";

export default defineMarkdocConfig({
  extends: [
    shiki({
      // Choose from Shiki's built-in themes (or add your own)
      // Default: 'github-dark'
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "dracula",
      // Enable word wrap to prevent horizontal scrolling
      // Default: false
      wrap: true,
      // Pass custom languages
      // Note: Shiki has countless langs built-in, including `.astro`!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
    }),
  ],
  tags: {
    aside: {
      render: component("./src/components/Aside.astro"),
      attributes: {
        type: { type: String },
        title: { type: String },
      },
    },
  },
});