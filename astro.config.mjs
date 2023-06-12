import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react(), markdoc()],
  adapter: vercel()
});