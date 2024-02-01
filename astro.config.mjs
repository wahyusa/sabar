import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import beautifulDracula from "./beautiful-dracula.json";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel({
    imageService: true,
    devImageService: "sharp",
  }),
  markdown: {
    shikiConfig: { theme: beautifulDracula, wrap: true },
  },
  site: "https://sabar.my.id",
  integrations: [
    mdx({
      gfm: true,
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
