import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button />,
};
