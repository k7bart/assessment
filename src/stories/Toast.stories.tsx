import type { Meta, StoryObj } from "@storybook/react-vite";

import { Toast } from "../components/Toast/Toast";

import "../index.css";

const meta = {
  title: "Assessment/Toast",
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fade: Story = {
  args: {
    timeout: 1500,
    transitionType: "fade",
  },
};

export const Slide: Story = {
  args: {
    timeout: 1500,
    transitionType: "slide",
  },
};

export const SlideLong: Story = {
  args: {
    timeout: 5000,
    transitionType: "slide",
  },
};
