import { Story, Meta } from '@storybook/react';
import { useRef } from 'react';
import { Button, ButtonProps } from './button';

export default {
  component: Button,
  title: 'Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  const ref = useRef(null);
  return (
    <Button variant={args.variant} ref={ref}>
      {args.children}
    </Button>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary',
};
