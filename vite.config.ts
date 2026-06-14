import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import pkg from "./package.json";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const port = 5173;

  const siteUrl =
    mode === "production" ? pkg.homepage.replace(/\/$/, "") : `http://localhost:${port}`;

  process.env.VITE_APP_SITE_URL = siteUrl;

  return {
    server: {
      port,
      strictPort: true,
    },
    plugins: [
      react(),
      VitePWA({
        mode: mode !== "development" ? "production" : "development",
        registerType: "prompt",
        manifest: {
          name: "alicedcodes",
          short_name: "alicedcodes",
          start_url: "/",
          display: "minimal-ui",
          shortcuts: [
            { name: "Overview", url: "/" },
            { name: "Projects", url: "/projects" },
          ],
          icons: [
            {
              src: "favicon.ico",
              sizes: "64x64 32x32 24x24 16x16",
              type: "image/x-icon",
            },
            {
              src: "apple-touch-icon.png",
              sizes: "180x180",
              type: "image/png",
            },
            {
              src: "apple-touch-icon.png",
              sizes: "180x180",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "apple-touch-icon.png",
              sizes: "180x180",
              type: "image/png",
              purpose: "maskable",
            },
          ],
          theme_color: "hsl(0, 0%, 20%)",
          background_color: "hsl(0, 0%, 20%)",
        },
        includeAssets: ["favicon.ico", "apple-touch-icon.png"],
      }),
    ],
  };
});
