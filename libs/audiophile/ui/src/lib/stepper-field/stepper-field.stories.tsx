import { Story, Meta } from '@storybook/react';
import { StepperField } from './stepper-field';

export default {
  component: StepperField,
  title: 'StepperField',
} as Meta;

const Template: Story<> = (args) => <StepperField {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
