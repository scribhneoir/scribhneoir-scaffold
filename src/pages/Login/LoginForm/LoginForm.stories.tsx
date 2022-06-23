import { ComponentMeta, Story } from "@storybook/react";

import LoginForm from "./LoginForm";
import { LoginFormProps } from "./LoginForm.models";

export default {
  title: "Pages/Login/Forms/LoginForm",
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
