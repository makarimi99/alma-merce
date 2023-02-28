import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://amazing-travesseiro-e89a9e.netlify.app',
  base: '/alma-merce',
});