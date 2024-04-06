import type { Preview } from "@storybook/react";
import "../app/globals.css";
import SlateTheme from "./SlateTheme";
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
