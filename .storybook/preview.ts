import type { Preview } from "@storybook/react";
import "../src/tokens/tokens.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "padded",
    backgrounds: {
      default: "surface",
      values: [
        { name: "surface", value: "#FFFBFE" },
        { name: "surface-container-low", value: "#F7F2FA" },
      ],
    },
  },
};

export default preview;
