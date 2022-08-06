import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { HumbugerButton, Props } from "./HumbugerButton";

export default {
  title: "Atoms/HumbugerButton",
  component: HumbugerButton,
} as ComponentMeta<typeof HumbugerButton>;

const Template: ComponentStory<typeof HumbugerButton> = (args) => (
  <HumbugerButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: "medium",
} as Props;
