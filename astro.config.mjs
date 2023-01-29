import { defineConfig } from 'astro/config';

// https://astro.build/config
// import tailwind from "@astrojs/tailwind";
import tailwind from "/lib/autoprefixdev";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
});