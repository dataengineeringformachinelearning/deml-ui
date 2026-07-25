import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Regenerate story index only when component HTML files are added/removed. */
function demlStoriesPlugin() {
  return {
    name: "deml-generate-stories",
    configureServer(server) {
      const componentsRoot = path.join(root, "components");
      const regenerate = (file) => {
        if (!file.startsWith(componentsRoot)) return;
        if (!file.endsWith(".html")) return;
        execSync("node scripts/generate-stories.mjs", {
          cwd: root,
          stdio: "inherit",
        });
      };
      server.watcher.add(componentsRoot);
      server.watcher.on("add", regenerate);
      server.watcher.on("unlink", regenerate);
    },
  };
}

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.stories.@(js|mjs)"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  async viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), demlStoriesPlugin()];
    return config;
  },
};

export default config;

