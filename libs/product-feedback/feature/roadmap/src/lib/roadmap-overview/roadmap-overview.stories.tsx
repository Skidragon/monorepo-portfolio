import { Story, Meta } from '@storybook/react';
import { RoadmapOverview, RoadmapOverviewProps } from './roadmap-overview';

export default {
  component: RoadmapOverview,
  title: 'RoadmapOverview',
} as Meta;

const Template: Story<RoadmapOverviewProps> = (args) => (
  <RoadmapOverview {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
