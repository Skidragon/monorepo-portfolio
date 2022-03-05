import { Story, Meta } from '@storybook/react';
import { GapCard } from './gap-card';

export default {
  component: GapCard,
  title: 'GapCard',
} as Meta;

const Template: Story<> = (args) => <GapCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
