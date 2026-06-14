import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
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
          icons: [],
          theme_color: "hsl(0, 0%, 20%)",
          background_color: "hsl(0, 0%, 20%)",
        },
      }),
    ],
  };
});
