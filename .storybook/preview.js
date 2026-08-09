import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from "storybook/viewport";
import "@fontsource-variable/geist/wght.css";
import "../styles.css";
import "../styles/base.css";
import "../components/components.css";
import { defaultChromaticModes } from "./modes.js";

const enforceA11y = Boolean(process.env.CI || process.env.CHROMATIC);

/** Canvas backgrounds — new-from-the-start warm ash only */
const demlBackgrounds = {
  default: "warm-ash",
  values: [
    { name: "warm-ash", value: "#35312D" },
    { name: "deep-surface", value: "#1C1916" },
    { name: "cream", value: "#F3F0EA" },
    { name: "light-ground", value: "#D4CEC5" },
  ],
};

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  tags: ["autodocs"],

  parameters: {
    layout: "fullscreen",

    controls: {
      expanded: true,
      sort: "requiredFirst",
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    actions: {
      handles: ["click", "submit", "change", "input", "toggle", "close"],
    },

    backgrounds: demlBackgrounds,

    viewport: {
      options: {
        ...MINIMAL_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
        demlContent: {
          name: "deml content (920px)",
          styles: { width: "920px", height: "100%" },
          type: "desktop",
        },
        demlNarrow: {
          name: "deml narrow (360px)",
          styles: { width: "360px", height: "100%" },
          type: "mobile",
        },
      },
      defaultOrientation: "portrait",
    },

    docs: {
      toc: true,
      codePanel: true,
      canvas: {
        sourceState: "shown",
      },
      source: {
        language: "html",
        excludeDecorators: true,
      },
    },

    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Introduction",
          "Dashboard",
          "Shell",
          "Layout",
          "Forms",
          "Feedback",
          "Data",
          "Overlays",
          "Components",
          "*",
        ],
      },
    },

    a11y: {
      // CI / Chromatic: fail on violations. Local: surface in panel.
      test: enforceA11y ? "error" : "todo",
      options: {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"],
        },
      },
    },

    chromatic: {
      modes: defaultChromaticModes,
      pauseAnimationAtEnd: true,
      // Prefer CSS-driven motion freeze for skeletons/spinners
      prefersReducedMotion: "reduce",
    },

    highlight: {
      disable: false,
    },
  },

  globalTypes: {
    density: {
      description: "Canvas padding density",
      defaultValue: "comfortable",
      toolbar: {
        title: "Density",
        icon: "component",
        items: [
          { value: "compact", title: "Compact", icon: "collapse" },
          { value: "comfortable", title: "Comfortable", icon: "component" },
          { value: "spacious", title: "Spacious", icon: "expand" },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "dark",
      attributeName: "data-theme",
      parentSelector: "html",
    }),
    (story, context) => {
      const density = context.globals.density || "comfortable";
      const padding =
        density === "compact"
          ? "var(--space-2)"
          : density === "spacious"
            ? "var(--space-8)"
            : "var(--space-4)";

      const root = document.documentElement;
      const isDark =
        root.getAttribute("data-theme") === "dark" ||
        context.globals.theme === "dark";
      root.classList.toggle("dark", isDark);
      root.classList.toggle("light", !isDark);

      const el = story();
      if (el instanceof HTMLElement) {
        el.style.setProperty("--story-padding", padding);
        el.dataset.density = density;
      }
      return el;
    },
  ],

  initialGlobals: {
    viewport: { value: "responsive", isRotated: false },
    backgrounds: { value: "warm-ash" },
    theme: "dark",
  },
};

export default preview;
