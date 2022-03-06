import { Story, Meta } from '@storybook/react';
import { AddProductCard, AddProductCardProps } from './add-product-card';

export default {
  component: AddProductCard,
  title: 'AddProductCard',
} as Meta;

const Template: Story<AddProductCardProps> = (args) => (
  <AddProductCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'XX99 Mark II Headphones',
  description:
    'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  cents: 299900,
  src: '/test.png',
};
