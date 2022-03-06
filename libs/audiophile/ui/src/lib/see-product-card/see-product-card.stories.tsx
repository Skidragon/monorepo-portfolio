import { Story, Meta } from '@storybook/react';
import { SeeProductCard, SeeProductCardProps } from './see-product-card';

export default {
  component: SeeProductCard,
  title: 'SeeProductCard',
} as Meta;

const Template: Story<SeeProductCardProps> = (args) => (
  <SeeProductCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  name: 'XX99 Mark II Headphones',
  description:
    'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  cents: 299900,
  src: '/image-category-page-preview.jpg',
  href: '#',
};
