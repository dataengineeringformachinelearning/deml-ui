/**
 * Chromatic + Storybook modes — light/dark + key viewports.
 * Applied globally in preview; stories may narrow modes.
 *
 * Globals keys match addon-themes (`theme`) and built-in viewport/backgrounds.
 */
export const allModes = {
  dark: {
    theme: "dark",
    backgrounds: { value: "warm-ash" },
  },
  light: {
    theme: "light",
    backgrounds: { value: "light-ground" },
  },
  "dark mobile": {
    theme: "dark",
    backgrounds: { value: "warm-ash" },
    viewport: "demlNarrow",
  },
  "light mobile": {
    theme: "light",
    backgrounds: { value: "light-ground" },
    viewport: "demlNarrow",
  },
  "dark content": {
    theme: "dark",
    backgrounds: { value: "warm-ash" },
    viewport: "demlContent",
  },
  "light content": {
    theme: "light",
    backgrounds: { value: "light-ground" },
    viewport: "demlContent",
  },
};

/** Default Chromatic matrix for every component story. */
export const defaultChromaticModes = {
  dark: allModes.dark,
  light: allModes.light,
};

/** Richer matrix for layout / shell / directory surfaces. */
export const layoutChromaticModes = {
  dark: allModes.dark,
  light: allModes.light,
  "dark mobile": allModes["dark mobile"],
  "light mobile": allModes["light mobile"],
};
