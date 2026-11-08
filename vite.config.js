import { defineConfig } from 'vite';

// Served from GitHub Pages at /escuadra-ops/ until the custom domain is set.
// When escuadraops.com is live: set base to '/', add public/CNAME, update og URLs in index.html.
export default defineConfig({
  base: '/escuadra-ops/',
});
