import { Story, Meta } from '@storybook/react';
import { Feedbacks, FeedbacksProps } from './feedbacks';

export default {
  component: Feedbacks,
  title: 'Feedbacks',
} as Meta;

const Template: Story<FeedbacksProps> = (args) => <Feedbacks {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  loading: false,
  data: [],
};
