import type { Meta, StoryObj } from "@storybook/react-vite";
import { useArgs } from "storybook/preview-api";

import { Sidebar } from "./Sidebar";

const meta = {
  title: "Assessment/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const render = function Render(args: Story["args"]) {
  const [{ isOpen }, updateArgs] = useArgs();

  const onToggle = (value?: boolean) => {
    updateArgs({ isOpen: value !== undefined ? value : !isOpen });
  };

  return <Sidebar {...args} onToggle={onToggle} />;
};

export const Open: Story = {
  args: {
    isOpen: true,
    onToggle: () => {},
  },
  render,
};

export const Close: Story = {
  args: {
    isOpen: false,
    onToggle: () => {},
  },
  render,
};
