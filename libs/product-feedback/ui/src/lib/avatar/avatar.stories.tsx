import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';

export default {
  component: Avatar,
  title: 'Avatar',
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  firstName: 'Simon',
  lastName: 'Davis',
  src: '',
};

export const Loading = Template.bind({});
Loading.args = {
  firstName: 'Simon',
  lastName: 'Davis',
  src: '',
  loading: true,
};
