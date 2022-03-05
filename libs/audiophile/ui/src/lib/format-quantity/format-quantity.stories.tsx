import { Story, Meta } from '@storybook/react';
import { FormatQuantity, FormatQuantityProps } from './format-quantity';

export default {
  component: FormatQuantity,
  title: 'FormatQuantity',
} as Meta;

const Template: Story<FormatQuantityProps> = (args) => (
  <FormatQuantity {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  quantity: 0,
};
