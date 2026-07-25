import "../styles.css";
import "../components/components.css";

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
    options: {
      storySort: {
        order: ["Shell", "Forms", "Components"],
      },
    },
    a11y: {
      test: "todo",
    },
  },
  globalTypes: {
    theme: {
      description: "Color theme",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "circlehollow", title: "Light" },
          { value: "dark", icon: "circle", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || "light";
      const root = document.documentElement;
      if (theme === "dark") {
        root.setAttribute("data-theme", "dark");
        root.classList.add("dark");
      } else {
        root.removeAttribute("data-theme");
        root.classList.remove("dark");
      }
      return story();
    },
  ],
};

export default preview;
