import { Story, Meta } from '@storybook/react';
import {
  RoadmapFeedbackStatusBoard,
  RoadmapFeedbackStatusBoardProps,
} from './roadmap-feedback-status-board';

export default {
  component: RoadmapFeedbackStatusBoard,
  title: 'RoadmapFeedbackStatusBoard',
} as Meta;

const Template: Story<RoadmapFeedbackStatusBoardProps> = (args) => (
  <RoadmapFeedbackStatusBoard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
