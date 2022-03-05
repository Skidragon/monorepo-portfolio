import { Story, Meta } from '@storybook/react';
import { FormatPrice, FormatPriceProps } from './format-price';

export default {
  component: FormatPrice,
  title: 'FormatPrice',
} as Meta;

const Template: Story<FormatPriceProps> = (args) => <FormatPrice {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  price: 0,
};
