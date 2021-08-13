import { Story, Meta } from '@storybook/react';
import { ReplyForm, ReplyFormProps } from './reply-form';

export default {
  component: ReplyForm,
  title: 'ReplyForm',
} as Meta;

const Template: Story<ReplyFormProps> = (args) => <ReplyForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  handle: '',
};
