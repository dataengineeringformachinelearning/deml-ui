import { defineConfig } from "vite";
import { resolve } from "node:path";

/**
 * Library build: Custom Elements ESM + IIFE (CDN) bundles.
 */
export default defineConfig({
  build: {
    emptyOutDir: false,
    // Single-file CDN bundles
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, "src/web-components/index.ts"),
      name: "Deml",
      formats: ["es", "iife"],
      fileName: (format) =>
        format === "es" ? "web-components/deml.js" : "web-components/deml.iife.js",
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: "web-components/[name][extname]",
      },
    },
    outDir: "dist",
    sourcemap: true,
    target: "es2022",
    minify: "esbuild",
  },
});
