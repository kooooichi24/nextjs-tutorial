import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ApllyButton = Template.bind({});
ApllyButton.args = {
  label: "応募する",
  color: "blue",
  size: "medium",
} as ButtonProps;

export const DeleteButton = Template.bind({});
DeleteButton.args = {
  label: "削除する",
  color: "red",
  size: "small",
} as ButtonProps;

export const DeleteDisabledButton = Template.bind({});
DeleteDisabledButton.args = {
  label: "削除する",
  color: "red",
  size: "small",
  disabled: true,
} as ButtonProps;
