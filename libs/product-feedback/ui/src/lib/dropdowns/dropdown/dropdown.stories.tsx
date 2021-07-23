import { Story, Meta } from '@storybook/react';
import { Dropdown, DropdownProps, DropdownOption } from './dropdown';

export default {
  component: Dropdown,
  title: 'Dropdown',
} as Meta;

const Template: Story<DropdownProps> = (args) => (
  <Dropdown {...args}>
    <DropdownOption value={'a1'}>Test 1</DropdownOption>
    <DropdownOption value={'a2'}>Test 2</DropdownOption>
    <DropdownOption value={'a3'}>Test 3</DropdownOption>
  </Dropdown>
);

export const Primary = Template.bind({});
Primary.args = {};
