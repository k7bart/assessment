import type { Meta, StoryObj } from "@storybook/react-vite";

import { Toast } from "./Toast";

const meta = {
  title: "Assessment/Toast",
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fade: Story = {
  args: {
    timeout: 1500,
    transition: "fade",
  },
};

export const Slide: Story = {
  args: {
    timeout: 1500,
    transition: "slide",
  },
};

export const SlideLong: Story = {
  args: {
    timeout: 4500,
    transition: "slide",
  },
};
