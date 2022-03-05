import { Story, Meta } from '@storybook/react';
import { ShopCategoryCard, ShopCategoryCardProps } from './shop-category-card';

export default {
  component: ShopCategoryCard,
  title: 'ShopCategoryCard',
} as Meta;

const Template: Story<ShopCategoryCardProps> = (args) => (
  <ShopCategoryCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
