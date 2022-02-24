import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { Dropdown, DropdownProps, DropdownItem } from './dropdown';

export default {
  component: Dropdown,
  title: 'Dropdown',
} as Meta;

const Template: Story<DropdownProps> = (args) => {
  const [item, setItem] = useState<DropdownItem>({});
  return (
    <Dropdown
      {...args}
      selectedItem={item}
      onSelectedItemChange={(changes) => {
        setItem(changes?.selectedItem || {});
      }}
      items={[
        {
          value: 'mostUpvotes',
          label: 'Most Upvotes',
        },
        {
          value: 'leastUpvotes',
          label: 'Least Upvotes',
        },
      ]}
      label={'Sort By'}
      ref={undefined}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {};
