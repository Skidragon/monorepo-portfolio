import { Story, Meta } from '@storybook/react';
import { Feedback, FeedbackProps } from './feedback';

export default {
  component: Feedback,
  title: 'Feedback',
} as Meta;

const Template: Story<FeedbackProps> = (args) => (
  <Feedback
    {...args}
    title={'Latin'}
    description={
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae quisquam excepturi nostrum cum earum aspernatur maiores dolores, quaerat neque!'
    }
    category="Enhanced"
    ref={undefined}
  />
);

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
