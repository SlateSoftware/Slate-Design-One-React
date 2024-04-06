import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const variants = cva(
  [
    "px-24 h-[44px] body text-light-text border rounded-12 shadow-fg",
    "enabled:hover:saturate-150 enabled:active:saturate-50 duration-200 ease-slate-out",
    "disabled:opacity-50 disabled:text-light-text-disabled disabled:cursor-not-allowed",
  ],
  {
    variants: {
      colour: {
        primary: ["bg-light-fg-accent-blue border-light-stroke-fg-accent-blue"],
        secondary: ["bg-light-fg border-light-stroke-fg"],
        green: ["bg-light-fg-accent-green border-light-stroke-fg-accent-green"],
        yellow: [
          "bg-light-fg-accent-yellow border-light-stroke-fg-accent-yellow",
        ],
        red: ["bg-light-fg-accent-red border-light-stroke-fg-accent-red"],
        purple: [
          "bg-light-fg-accent-purple border-light-stroke-fg-accent-purple",
        ],
      },
    },
    defaultVariants: {
      colour: "primary",
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof variants>;
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

export const Button = ({
  children,
  colour,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={variants({ colour })}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
