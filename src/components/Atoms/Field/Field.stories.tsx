import { ComponentMeta, Story } from "@storybook/react";

import Field from "./Field";
import { FieldProps } from "./Field.models";

export default {
  title: "Atoms/Field",
  component: Field,
} as ComponentMeta<typeof Field>;

const Template: Story<FieldProps> = (args) => <Field {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Field",
  value: "",
  disabled: false,
  error: "",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Field",
  value: "Field",
  disabled: true,
  error: "",
};

export const Error = Template.bind({});
Error.args = {
  placeholder: "Field",
  value: "Field",
  disabled: false,
  error: "Error",
};
