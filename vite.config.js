import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  // Plain static HTML site — no app bundle required
  appType: "mpa",
});
