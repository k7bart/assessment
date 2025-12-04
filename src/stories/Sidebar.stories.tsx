import type { Meta, StoryObj } from "@storybook/react-vite";
import { useArgs } from "storybook/preview-api";

import { Sidebar } from "../components/Sidebar/Sidebar";
import type { Item } from "../components/Sidebar/types";

import "../index.css";

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

const oneLevelMenu: Item[] = [
  { label: "Nesting 0" },
  { label: "Nesting 0" },
  { label: "Nesting 0" },
];

export const Open: Story = {
  args: {
    menu: oneLevelMenu,
    isOpen: true,
    onToggle: () => {},
  },
  render,
};

export const Close: Story = {
  args: {
    menu: oneLevelMenu,
    isOpen: false,
    onToggle: () => {},
  },
  render,
};

const multipleLevelsMenu: Item[] = [
  {
    label: "Nesting 0",
    items: [
      { label: "Nesting 1" },
      {
        label: "Nesting 1",
        items: [
          { label: "Nesting 2" },
          { label: "Nesting 2" },
          { label: "Nesting 2" },
        ],
      },
      { label: "Nesting 1" },
    ],
  },
  {
    label: "Nesting 0",
    items: [
      { label: "Nesting 1" },
      { label: "Nesting 1" },
      { label: "Nesting 1" },
    ],
  },
];

export const MultipleLevelsNesting: Story = {
  args: {
    menu: multipleLevelsMenu,
    isOpen: true,
    onToggle: () => {},
  },
  render,
};
