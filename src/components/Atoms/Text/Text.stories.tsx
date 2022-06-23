import { ComponentMeta, Story } from "@storybook/react";

import Text from "./Text";
import { TextProps } from "./Text.models";

export default {
  title: "Atoms/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  bold: false,
  children: "Text",
};
export const Bold = Template.bind({});
Bold.args = {
  bold: true,
  children: "Text",
};
