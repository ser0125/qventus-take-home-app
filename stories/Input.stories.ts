import type { Meta, StoryObj } from "@storybook/react";
import Input from "@/app/components/Input/Input";
import { userEvent, within } from "@storybook/testing-library";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Password/Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    onChange: {
      control: {
        type: "func",
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const TogglePassword: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const togglePassword = await canvas.getByRole("button");
    await userEvent.click(togglePassword);
  },
};
