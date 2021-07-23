import { Story, Meta } from '@storybook/react';
import {
  ProductFeedbackBoardCard,
  ProductFeedbackBoardCardProps,
} from './product-feedback-board-card';

export default {
  component: ProductFeedbackBoardCard,
  title: 'ProductFeedbackBoardCard',
} as Meta;

const Template: Story<ProductFeedbackBoardCardProps> = (args) => (
  <ProductFeedbackBoardCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
