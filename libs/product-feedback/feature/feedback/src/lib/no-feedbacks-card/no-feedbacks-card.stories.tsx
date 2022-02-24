import { Story, Meta } from '@storybook/react';
import { NoFeedbacksCard, NoFeedbacksCardProps } from './no-feedbacks-card';

export default {
  component: NoFeedbacksCard,
  title: 'NoFeedbacksCard',
} as Meta;

const Template: Story<NoFeedbacksCardProps> = (args) => (
  <NoFeedbacksCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
