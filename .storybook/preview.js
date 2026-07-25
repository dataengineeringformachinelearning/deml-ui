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
  },
};

export default preview;
