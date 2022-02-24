import { Story, Meta } from '@storybook/react';
import { Comments, CommentsProps } from './comments';

export default {
  component: Comments,
  title: 'Comments',
} as Meta;

const Template: Story<CommentsProps> = (args) => <Comments {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
