import tailwindcss from "@tailwindcss/vite";
import devtools from "solid-devtools/vite";
import { VitePWA } from "vite-plugin-pwa";
import solidPlugin from "vite-plugin-solid";
import { defineConfig, lazyPlugins } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    sortPackageJson: { sortScripts: true },
    sortTailwindcss: { stylesheet: "src/index.css", functions: ["cn"] },
    sortImports: true,
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  plugins: lazyPlugins(() => [
    devtools(),
    solidPlugin(),
    tailwindcss(),
    VitePWA({
      manifest: {
        name: "Alice Driscoll",
        short_name: "Alice D",
        description: "Alice Driscoll's homepage.",
        display: "standalone",
        orientation: "any",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        shortcuts: [
          {
            name: "Infinite Minesweeper",
            short_name: "Minesweeper",
            url: "/infinite-minesweeper/",
            icons: [
              {
                src: "/infinite-minesweeper/icons/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "any",
              },
              {
                src: "/infinite-minesweeper/icons/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any",
              },
            ],
          },
        ],
        theme_color: "#ff6900",
      },
      registerType: "autoUpdate",
      injectRegister: "inline",
    }),
  ]),
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
