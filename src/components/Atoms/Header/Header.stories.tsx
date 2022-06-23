import { ComponentMeta, Story } from "@storybook/react";

import Header from "./Header";
import { HeaderProps } from "./Header.models";

export default {
  title: "Atoms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const H1 = Template.bind({});
H1.args = {
  h: 1,
  children: "Header",
};
export const H2 = Template.bind({});
H2.args = {
  h: 2,
  children: "Header",
};
export const H3 = Template.bind({});
H3.args = {
  h: 3,
  children: "Header",
};
