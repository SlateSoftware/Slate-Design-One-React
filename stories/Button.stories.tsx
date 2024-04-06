import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    colour: {
      options: ["primary", "secondary", "green", "yellow", "red", "purple"],
      control: { type: "radio" },
    },
    disabled: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button {...args}>Button</Button>,
};
Default.args = {
  colour: "primary",
  disabled: false,
};
