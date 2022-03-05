import { Story, Meta } from '@storybook/react';
import { LineItem, LineItemProps } from './line-item';

export default {
  component: LineItem,
  title: 'LineItem',
} as Meta;

const Template: Story<LineItemProps> = (args) => <LineItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
