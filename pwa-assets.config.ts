import { defineConfig, minimal2023Preset } from "@vite-pwa/assets-generator/config";

export default defineConfig({
  preset: {
    ...minimal2023Preset,
    maskable: {
      ...minimal2023Preset.maskable,
      resizeOptions: {
        background: "#00BC7D",
      },
    },
  },
  images: ["public/favicon.svg"],
  overrideAssets: true,
});
