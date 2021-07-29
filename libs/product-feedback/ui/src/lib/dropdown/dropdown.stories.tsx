import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { Dropdown, DropdownProps, DropdownOption } from './dropdown';

export default {
  component: Dropdown,
  title: 'Dropdown',
} as Meta;

const Template: Story<DropdownProps> = (args) => {
  const [value, setValue] = useState('');
  return (
    <Dropdown
      {...args}
      value={value}
      onOptionChange={(value) => {
        console.log(value);
        setValue(value);
      }}
      label={'Sort By'}
      ref={undefined}
    >
      <DropdownOption value={'a1'}>Most Upvotes</DropdownOption>
      <DropdownOption value={'a2'}>Least Upvotes</DropdownOption>
      <DropdownOption value={'a3'}>Most Comments</DropdownOption>
      <DropdownOption value={'a4'}>Least Comments</DropdownOption>
    </Dropdown>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
