import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

const demlTheme = create({
  base: "light",
  brandTitle: "deml-ui",
  brandUrl: "https://ui.deml.app",
  brandTarget: "_self",

  colorPrimary: "#5C2A5A",
  colorSecondary: "#5C2A5A",

  appBg: "#F7F8FA",
  appContentBg: "#FFFFFF",
  appPreviewBg: "#F7F8FA",
  appBorderColor: "#D1D8DE",
  appBorderRadius: 8,

  textColor: "#0C0C0D",
  textInverseColor: "#F7F8FA",
  textMutedColor: "#4A5560",

  barTextColor: "#4A5560",
  barSelectedColor: "#5C2A5A",
  barHoverColor: "#8B5A8C",
  barBg: "#FFFFFF",

  inputBg: "#FFFFFF",
  inputBorder: "#D1D8DE",
  inputTextColor: "#0C0C0D",
  inputBorderRadius: 6,

  fontBase:
    '"Geist", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontCode: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
});

addons.setConfig({
  theme: demlTheme,
  panelPosition: "bottom",
  enableShortcuts: true,
  showToolbar: true,
  sidebar: {
    showRoots: true,
    collapsedRoots: [],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
    // Essentials toolbar tools — keep visible
    "storybook/viewport": { hidden: false },
    "storybook/background": { hidden: false },
    "storybook/outline": { hidden: false },
    "storybook/measure": { hidden: false },
  },
  initialActive: "sidebar",
});
