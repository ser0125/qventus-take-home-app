import type { Meta, StoryObj } from "@storybook/react";
import CheckValidation from "@/app/components/CheckValidation/CheckValidation";
import { userEvent, within } from "@storybook/testing-library";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Password/CheckValidation",
  component: CheckValidation,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    isValid: { control: "boolean" },
  },
} satisfies Meta<typeof CheckValidation>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const CheckValidationIsValid: Story = {
  args: {
    label: "Test Validation",
    isValid: true,
  },
};
