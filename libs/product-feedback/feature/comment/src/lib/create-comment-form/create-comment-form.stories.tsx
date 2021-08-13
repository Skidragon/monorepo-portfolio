import { Story, Meta } from '@storybook/react';
import {
  CreateCommentForm,
  CreateCommentFormProps,
} from './create-comment-form';

export default {
  component: CreateCommentForm,
  title: 'CreateCommentForm',
} as Meta;

const Template: Story<CreateCommentFormProps> = (args) => (
  <CreateCommentForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
