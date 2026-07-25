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
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|mjs|ts|tsx)",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  // Storybook 10 essentials are on by default — keep every feature enabled
  features: {
    actions: true,
    backgrounds: true,
    controls: true,
    highlight: true,
    measure: true,
    outline: true,
    toolbars: true,
    viewport: true,
  },
  docs: {
    autodocs: "tag",
    defaultName: "Docs",
  },
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), demlSyncPlugin()];
    return config;
  },
};

export default config;
