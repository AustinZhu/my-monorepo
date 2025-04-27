import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import type { AstroUserConfig } from 'astro';

// https://astro.build/config
const config: AstroUserConfig = defineConfig({
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  }
});

export default config;
