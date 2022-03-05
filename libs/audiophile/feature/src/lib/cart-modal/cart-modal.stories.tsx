import { Story, Meta } from '@storybook/react';
import { CartModal, CartModalProps } from './cart-modal';

export default {
  component: CartModal,
  title: 'CartModal',
} as Meta;

const Template: Story<CartModalProps> = (args) => (
  <CartModal {...args} ref={null} />
);

export const Primary = Template.bind({});
Primary.args = {
  products: [
    {
      name: 'Headphones SS',
      price: 2000,
      src: '/picture.png',
    },
    {
      name: 'Earphones Super',
      price: 50000,
      src: '/picture.png',
    },
    {
      name: 'Another Item',
      price: 70000,
      src: '/picture.png',
    },
  ],
};
