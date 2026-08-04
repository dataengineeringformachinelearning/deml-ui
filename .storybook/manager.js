import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

/** Storybook chrome — new-from-the-start warm ash (Geist, sharp modules) */
const demlTheme = create({
  base: "dark",
  brandTitle: "deml-ui",
  brandUrl: "https://ui.deml.app",
  brandTarget: "_self",

  colorPrimary: "#2F5F8F",
  colorSecondary: "#2F5F8F",

  appBg: "#35312D",
  appContentBg: "#1C1916",
  appPreviewBg: "#35312D",
  appBorderColor: "#4A453F",
  appBorderRadius: 0,

  textColor: "#F3F0EA",
  textInverseColor: "#1C1916",
  textMutedColor: "#C6C0B7",

  barTextColor: "#C6C0B7",
  barSelectedColor: "#9BB8D4",
  barHoverColor: "#C2D4E6",
  barBg: "#1C1916",

  inputBg: "#1C1916",
  inputBorder: "#4A453F",
  inputTextColor: "#F3F0EA",
  inputBorderRadius: 0,

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
    "storybook/viewport": { hidden: false },
    "storybook/background": { hidden: false },
    "storybook/outline": { hidden: false },
    "storybook/measure": { hidden: false },
  },
  initialActive: "sidebar",
});
