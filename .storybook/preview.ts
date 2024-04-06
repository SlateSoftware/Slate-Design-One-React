import type { Preview } from "@storybook/react";
import SlateTheme from "./SlateTheme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: SlateTheme,
    },
  },
};

export default preview;
