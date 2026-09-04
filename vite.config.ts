import tailwindcss from "@tailwindcss/vite";
import devtools from "solid-devtools/vite";
import solidPlugin from "vite-plugin-solid";
import { defineConfig, lazyPlugins } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    sortPackageJson: {
      sortScripts: true,
    },
    sortImports: true,
    sortTailwindcss: {
      stylesheet: "src/index.css",
      functions: ["clsx"],
    },
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    options: { typeAware: true, typeCheck: true },
  },
  plugins: lazyPlugins(() => [devtools(), solidPlugin(), tailwindcss()]),
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
