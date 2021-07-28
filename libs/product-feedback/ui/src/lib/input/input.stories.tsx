import { Story, Meta } from '@storybook/react';
import { useRef } from 'react';
import { Input, InputProps } from './input';

export default {
  component: Input,
  title: 'Input',
} as Meta;

const Template: Story<InputProps> = (args) => {
  const ref = useRef(null);
  return <Input {...args} label="Feedback Title" ref={ref} />;
};

export const Primary = Template.bind({});
Primary.args = {
  id: 'primary',
};

export const WithHelper = Template.bind({});
WithHelper.args = {
  helperText: 'Add a short, descriptive headline',
  id: 'with-helper',
};
export const Error = Template.bind({});
Error.args = {
  hasError: true,
  errorMessage: 'Can’t be empty',
  id: 'error',
};
