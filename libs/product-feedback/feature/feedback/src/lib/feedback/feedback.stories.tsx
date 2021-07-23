import { Story, Meta } from '@storybook/react';
import { Feedback, FeedbackProps } from './feedback';

export default {
  component: Feedback,
  title: 'Feedback',
} as Meta;

const Template: Story<FeedbackProps> = (args) => <Feedback {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
