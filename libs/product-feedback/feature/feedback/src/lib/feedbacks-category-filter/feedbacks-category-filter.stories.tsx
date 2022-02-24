import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import {
  FeedbacksCategoryFilter,
  FeedbacksCategoryFilterProps,
} from './feedbacks-category-filter';

export default {
  component: FeedbacksCategoryFilter,
  title: 'FeedbacksCategoryFilter',
} as Meta;

const Template: Story<FeedbacksCategoryFilterProps> = (...args) => {
  const [value, setValue] = useState('');
  return (
    <FeedbacksCategoryFilter
      data={['All', 'UI', 'UX', 'Bug', 'Enhanced', 'Feature']}
      onClick={(event, value) => {
        setValue(value);
      }}
      value={value}
      {...args}
      ref={undefined}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {};
