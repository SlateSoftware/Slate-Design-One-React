import type { Preview } from "@storybook/react";
import SlateTheme from "./SlateTheme";
import "../app/globals.css";
import { DM_Sans, DM_Mono } from "next/font/google";
import React from "react";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: "400",
});

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
  decorators: [
    (Story) => (
      <div className={`${dmSans.variable} ${dmMono.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
