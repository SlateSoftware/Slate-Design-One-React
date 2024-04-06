import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  // Typography
  fontBase: '"DM Sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "Slate Design kit One",
  brandImage: "/storybook-brandlogo.png",
  brandTarget: "_self",

  //
  colorPrimary: "#00A0E4",
  colorSecondary: "#00A0E4",

  // UI
  appBg: "#E3E3E3",
  appContentBg: "#DDDDDD",
  appPreviewBg: "#DDDDDD",
  appBorderColor: "#00000026",
  appBorderRadius: 12,

  // Text colors
  textColor: "#1C1C1C",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#1C1C1C",
  barSelectedColor: "#00A0E4",
  barHoverColor: "#0385bc",
  barBg: "#E3E3E3",

  // Form colors
  inputBg: "#ffffff36",
  inputBorder: "#0000001a",
  inputTextColor: "#1C1C1C",
  inputBorderRadius: 8,
});
