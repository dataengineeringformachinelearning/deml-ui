import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from "storybook/viewport";
import "@fontsource-variable/geist/wght.css";
import "../styles.css";
import "../components/components.css";

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
    // Essentials: layout / docs / controls / actions / viewport / backgrounds / a11y
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
      // Log common interactive events from demos
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
      // Surface violations in the A11y panel; CI can tighten to "error" later
      test: "todo",
      options: {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"],
        },
      },
    },

    // Measure & outline are toolbar tools; highlight helps a11y/focus inspection
    highlight: {
      disable: false,
    },
  },

  globalTypes: {
    // Layout density quick toggle (complements backgrounds/viewport)
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

      // Keep .dark in sync with themes addon (tokens accept data-theme or .dark)
      const root = document.documentElement;
      const isDark =
        root.getAttribute("data-theme") === "dark" ||
        context.globals.theme === "dark";
      root.classList.toggle("dark", isDark);

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
  },
};

export default preview;
