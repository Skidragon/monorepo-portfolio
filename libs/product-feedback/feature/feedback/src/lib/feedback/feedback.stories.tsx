import { Story, Meta } from '@storybook/react';
import { Feedback, FeedbackProps } from './feedback';

export default {
  component: Feedback,
  title: 'Feedback',
} as Meta;

const Template: Story<FeedbackProps> = (args) => <Feedback {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const StatusShown = Template.bind({});
StatusShown.args = {
  statusType: 'PLANNED',
  isCompactView: false,
  showStatus: true,
};

export const CompactView = Template.bind({});
CompactView.args = {
  isCompactView: true,
};

export const CompactViewWithStatusShown = Template.bind({});
CompactViewWithStatusShown.args = {
  statusType: 'PLANNED',
  isCompactView: true,
  showStatus: true,
};
