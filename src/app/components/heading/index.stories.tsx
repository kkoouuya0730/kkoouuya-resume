import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";
import UseIon from "../ui/icons/UseIcon";

const meta = {
  title: "components/heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: { level: "h1", children: <></> },
  render: () => (
    <div>
      <Heading level="h1">Locations</Heading>
      <Heading level="h2">Locations</Heading>
      <Heading level="h3">Locations</Heading>
    </div>
  ),
};

export const AllWithIcon: Story = {
  args: { level: "h1", children: <></> },
  render: () => (
    <div>
      <Heading level="h1">
        <span className="flex items-center">
          <UseIon iconName="brain" />
          <span>スキル</span>
        </span>
      </Heading>
      <Heading level="h2">
        <span className="flex items-center">
          <UseIon iconName="academic" />
          <span>学歴</span>
        </span>
      </Heading>
      <Heading level="h3">
        <span className="flex items-center">
          <UseIon iconName="briefcase" />
          <span>職歴</span>
        </span>
      </Heading>
    </div>
  ),
};
