import { ComponentMeta, Story } from '@storybook/react';

import SignUpForm from './SignUpForm';
import { SignUpFormProps } from './SignUpForm.models';

export default {
  title: 'Pages/Login/Forms/Sign Up Form',
  component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>;

const Template: Story<SignUpFormProps> = (args) => <SignUpForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
