import solid from "@solidjs/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import solidV2 from "eslint-plugin-solid/configs/v2";
import { defineConfig, lazyPlugins } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    sortImports: true,
    sortPackageJson: { sortScripts: true },
    sortTailwindcss: { stylesheet: "src/App.css", functions: ["clsx"] },
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }, "eslint-plugin-solid"],
    settings: solidV2.settings,
    rules: {
      ...solidV2.rules,
      "no-console": ["error", { allow: ["error", "warn"] }],
      "import/no-relative-parent-imports": "error",
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    options: { typeAware: true, typeCheck: true },
  },
  plugins: lazyPlugins(() => [solid({ start: true, diagnostics: true }), tailwindcss() as any]),
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    assetsInlineLimit: 0,
  },
});
