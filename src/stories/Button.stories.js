import { string } from "prop-types";
import React from "react";
import Button from '../components/Button'


export default {
  title: 'Components/Button',
  component: Button,
  args: {
    value: string,
  }
}

const Template = args => <Button {...args} />;

export const Discount = Template.bind({});
Discount.args = {
  value: '10%'
}

export const Reset = Template.bind({})
Reset.args = {
  value: 'Reset'
}