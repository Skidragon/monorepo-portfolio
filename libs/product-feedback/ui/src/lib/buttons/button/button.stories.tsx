import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button variant={args.variant}>{args.children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary',
};
