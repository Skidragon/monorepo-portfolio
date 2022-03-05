import { Story, Meta } from '@storybook/react';
import { RadioField } from './radio-field';

export default {
  component: RadioField,
  title: 'RadioField',
} as Meta;

const Template: Story<> = (args) => <RadioField {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
