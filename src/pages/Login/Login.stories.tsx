import { ComponentMeta, Story } from "@storybook/react";

import Login from "./Login";
import { LoginProps } from "./Login.models";

export default {
  title: "Pages/Login",
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
