import { Story, Meta } from '@storybook/react';
import {
  RoadmapFeedbackStatusBoard,
  RoadmapFeedbackStatusBoardProps,
} from './roadmap-feedback-status-board';
import { FeedbackProps } from '@sd/product-feedback/feature/feedback';

export default {
  component: RoadmapFeedbackStatusBoard,
  title: 'RoadmapFeedbackStatusBoard',
} as Meta;

const Template: Story<RoadmapFeedbackStatusBoardProps> = (args) => (
  <RoadmapFeedbackStatusBoard data={args.data} />
);

const mockFeedbacks: FeedbackProps[] = [
  {
    title: 'More comprehensive reports',
    description:
      'It would be great to see a more detailed breakdown of solutions.',
    statusType: 'PLANNED',
  },
  {
    title: 'Learning Paths',
    description:
      'Sequenced projects for different goals to help people improve.',
    statusType: 'PLANNED',
  },
  {
    title: 'Bookmark challenges',
    description: 'Be able to bookmark challenges to take later on.',
    statusType: 'IN_PROGRESS',
  },
  {
    title: 'Add micro-interactions',
    description: 'Small animations at specific points can add delight.',
    statusType: 'LIVE',
  },
];
export const Primary = Template.bind({});
Primary.args = {
  data: mockFeedbacks,
};
