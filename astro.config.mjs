import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import beautifulDracula from "./beautiful-dracula.json";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: { theme: beautifulDracula, wrap: true },
  },
  site: "https://sabar.my.id",
  integrations: [
    mdx(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
