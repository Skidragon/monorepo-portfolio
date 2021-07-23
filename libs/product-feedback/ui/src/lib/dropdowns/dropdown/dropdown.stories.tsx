import { Story, Meta } from '@storybook/react';
import { Dropdown, DropdownProps, Option } from './dropdown';

export default {
  component: Dropdown,
  title: 'Dropdown',
} as Meta;

const Template: Story<DropdownProps> = (args) => (
  <Dropdown {...args}>
    <Option value={'a1'}>Test 1</Option>
    <Option value={'a2'}>Test 2</Option>
    <Option value={'a3'}>Test 3</Option>
  </Dropdown>
);

export const Primary = Template.bind({});
Primary.args = {};
