import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HumbugerButton } from "./HumbugerButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: HumbugerButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof HumbugerButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HumbugerButton> = (args) => (
  <HumbugerButton {...args} />
);

export const ApplyButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ApplyButton.args = {
  color: "blue",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
