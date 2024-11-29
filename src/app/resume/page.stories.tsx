import type { Meta, StoryObj } from "@storybook/react";
import Resume from "./page";

const meta = {
  title: "pages/Resume",
  component: Resume,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Resume>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
