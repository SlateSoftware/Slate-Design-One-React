import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      // ---- LIGHT MODE ----
      // Background
      "light-bg-floating-window":
        "linear-gradient(to bottom, rgba(237, 237, 237, 0.8),rgba(250, 254, 255, 0.75))",
      // Foreground
      "light-fg":
        "linear-gradient(to bottom, rgba(255, 255, 255, 0.29), rgba(255, 255, 255, 0.24))",
      "light-fg-subtle":
        "linear-gradient(to bottom, rgba(255, 255, 255, 0.21), rgba(255, 255, 255, 0.17))",
      "light-fg-no-bg":
        "linear-gradient(to bottom, rgba(255, 255, 255, 0.58), rgba(255, 255, 255, 0.53))",
      // Coloured foreground
      "light-fg-selected":
        "linear-gradient(to bottom, rgba(220, 245, 255, 0.64), rgba(207, 242, 255, 0.49))",
      "light-fg-selected-2":
        "linear-gradient(to bottom, rgba(241, 251, 255, 0.58), rgba(236, 249, 255, 0.45))",
      "light-fg-danger":
        "linear-gradient(to bottom, rgba(227, 106, 128, 0.46), rgba(192, 0, 34, 0.42)",
      "light-fg-warning":
        "linear-gradient(to bottom, rgba(255, 237, 141, 0.35), rgba(255, 227, 84, 0.29))",
      "light-fg-success":
        "linear-gradient(to bottom, rgba(156, 224, 163, 0.56), rgba(33, 217, 51, 0.38))",
      "light-fg-accent-blue":
        "linear-gradient(to bottom, rgba(0, 178, 255, 0.45), rgba(0, 178, 255, 0.63))",
      "light-fg-accent-red":
        "linear-gradient(to bottom, rgba(225, 22, 58, 0.41), rgba(225, 22, 58, 0.49))",
      "light-fg-accent-yellow":
        "linear-gradient(to bottom, rgba(255, 216, 13, 0.38), rgba(255, 213, 0, 0.44))",
      "light-fg-accent-green":
        "linear-gradient(to bottom, rgba(33, 217, 51, 0.37), rgba(33, 217, 51, 0.53))",
      "light-fg-accent-purple":
        "linear-gradient(to bottom, rgba(138, 59, 238, 0.49), rgba(119, 25, 238, 0.46))",
      "light-fg-accent-gray":
        "linear-gradient(to bottom, rgba(200, 200, 200, 0.52), rgba(168, 168, 168, 0.38))",
    },
    colors: {
      // ---- LIGHT MODE ----
      // Flat Colours
      "light-red-flat": "rgba(225, 22, 58, 1)",
      "light-yellow-flat": "rgba(203, 171, 6, 1)",
      "light-green-flat": "rgba(22, 197, 40, 1)",
      "light-blue-flat": "rgba(0, 160, 228, 1)",
      "light-purple-flat": "rgba(96, 0, 218, 1)",
      "light-gray-flat": "rgba(160, 160, 160, 1)",
      // Background
      "light-bg-flat": "rgba(227, 227, 227, 1)",
      // Strokes (aka borders) (css sadly doesn't support gradient borders)
      "light-stroke-fg": "rgba(0, 0, 0, 0.15)",
      "light-stroke-fg-disabled": "rgba(0, 0, 0, 0.07)",
      "light-stroke-fg-2": "rgba(0, 0, 0, 0.10)",
      "light-stroke-fg-2-disabled": "rgba(0, 0, 0, 0.55)",
      "light-stroke-fg-selected": "rgba(0, 178, 255, 0.85)",
      "light-stroke-fg-selected-disabled": "rgba(0, 178, 255, 0.27)",
      "light-stroke-fg-danger": "rgba(167, 9, 37, 1)",
      "light-stroke-fg-warning": "rgba(255, 122, 0, 1)",
      "light-stroke-fg-success": "rgba(2, 83, 10, 0.78)",
      "light-stroke-fg-accent-blue": "rgba(0, 136, 195, 0.47)",
      "light-stroke-fg-accent-red": "rgba(184, 15, 45, 0.67)",
      "light-stroke-fg-accent-yellow": "rgba(207, 176, 15, 0.81)",
      "light-stroke-fg-accent-green": "rgba(26, 181, 41, 0.62)",
      "light-stroke-fg-accent-purple": "rgba(71, 10, 149, 0.67)",
    },
    textColor: {
      // ---- LIGHT MODE ----
      "light-text": "rgba(28, 28, 28, 1)",
      "light-text-subtle": "rgba(11, 11, 11, 0.65)",
      "light-text-disabled": "rgba(28, 28, 28, 0.4)",
    },
    fontSize: {
      // Don't use normal tailwind fontsize or fontfamily in your classnames, use the @apply values found in globals.css
      sub: "10px",
      body: "13px",
      "body-strong": "13px",
      5: "17px",
      4: "22px",
      3: "28px",
      2: "36px",
      1: "60px",
      mono: "13px",
    },
    fontFamily: {
      // Don't use normal tailwind fontsize or fontfamily in your classnames, use the @apply values found in globals.css
      // THIS CODE IS FOR NEXT.JS, SEE README FOR INFO
      sans: ["var(--font-dm-sans)"],
      mono: ["var(--font-dm-mono)"],
    },
    borderRadius: {
      32: "32px",
      24: "24px",
      12: "12px",
      8: "8px",
    },
    spacing: {
      0: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      48: "48px",
      64: "64px",
      72: "72px",
      80: "80px",
      96: "96px",
      128: "128px",
      192: "192px",
      256: "256px",
      512: "512px",
    },
    boxShadow: {
      "light-fg":
        "0px -14px 30px 0px rgba(0, 0, 0, 0.02) inset, 0px 1px 30px 3px rgba(0, 0, 0, 0.03)",
      "light-fg-subtle":
        "0px -14px 12px 0px rgba(0, 0, 0, 0.01) inset, 0px 1px 20px 2px rgba(0, 0, 0, 0.01)",
      "light-bg-floating-window": "0px 0px 72px 0px rgba(0, 0, 0, 0.12)",
    },
    backdropBlur: {
      "bg-floating-window": "36px",
      fg: "12px",
    },
    extend: {
      // Animation
      transitionTimingFunction: {
        "slate-out": "cubic-bezier(.14,.02,.09,.92)",
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(.14,.02,.09,.92)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(.14,.02,.09,.92)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(.14,.02,.09,.92)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(.14,.02,.09,.92)",
      },
    },
  },
  plugins: [],
};
export default config;
