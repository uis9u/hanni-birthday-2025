/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "dist", // デフォルトは 'dist'
    assetsDir: "assets", // CSSや画像などのアセット
    sourcemap: false,
  },
});
