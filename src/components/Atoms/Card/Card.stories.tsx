import { ComponentMeta, Story } from "@storybook/react";

import Card from "./Card";
import { CardProps } from "./Card.models";

export default {
  title: "Atoms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const A = Template.bind({});
A.args = {};

export const B = Template.bind({});
B.args = {};
