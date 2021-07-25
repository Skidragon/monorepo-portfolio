import { Story, Meta } from '@storybook/react';
import { Card, CardProps } from './card';

export default {
  component: Card,
  title: 'Card',
} as Meta;

const Template: Story<CardProps> = (args) => (
  <div
    style={{
      position: 'absolute',
      top: '40%',
      width: '100%',
    }}
  >
    <Card {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
