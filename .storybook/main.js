import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/** Regenerate stories/CSS barrel/wrappers when component folders change. */
function demlSyncPlugin() {
  return {
    name: "deml-sync",
    configureServer(server) {
      const componentsRoot = path.join(root, "components");
      let timer = null;
      const schedule = (file) => {
        if (!file.startsWith(componentsRoot)) return;
        // HTML add/remove or new folder → full sync; CSS edits HMR via imports
        const isHtml = file.endsWith(".html");
        const isMeta = file.endsWith("meta.json");
        if (!isHtml && !isMeta) return;
        clearTimeout(timer);
        timer = setTimeout(() => {
          try {
            execSync("node scripts/sync.mjs", {
              cwd: root,
              stdio: "inherit",
            });
          } catch (err) {
            console.error("[deml-sync]", err);
          }
        }, 100);
      };
      server.watcher.add(componentsRoot);
      server.watcher.on("add", schedule);
      server.watcher.on("unlink", schedule);
      server.watcher.on("change", schedule);
    },
  };
}

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.stories.@(js|mjs)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  async viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), demlSyncPlugin()];
    return config;
  },
};

export default config;
