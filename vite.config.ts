import { fileURLToPath, URL } from "node:url";
import postcssNested from "postcss-nested";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [postcssNested, autoprefixer],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 7707,
  },
});
