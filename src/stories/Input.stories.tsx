import type { Meta, StoryObj } from "@storybook/react-vite";
import { useArgs } from "storybook/preview-api";

import { Input } from "../components/Input/Input";

import "../index.css";

const meta = {
  title: "Assessment/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const render = function Render(args: Story["args"]) {
  const [, updateArgs] = useArgs();

  const onChange = (value: string) => updateArgs({ value });
  const onClear = () => updateArgs({ value: "" });

  return <Input {...args} onChange={onChange} onClear={onClear} />;
};

export const Text: Story = {
  args: {
    value: "Storybook",
    onChange: () => {},
  },
  render,
};

export const Number: Story = {
  args: {
    value: "3.1415",
    type: "number",
    onChange: () => {},
  },
  render,
};

export const Password: Story = {
  args: {
    value: "Qwerty123!",
    type: "password",
    onChange: () => {},
  },
  render,
};

export const PasswordClearable: Story = {
  args: {
    value: "Qwerty123!",
    type: "password",
    clearable: true,
    onChange: () => {},
  },
  render,
};
