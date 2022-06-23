import { ComponentMeta, Story } from "@storybook/react";

import Button from "./Button";
import { ButtonProps } from "./Button.models";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Button",
};
export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  children: "Button",
};
