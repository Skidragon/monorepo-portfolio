import { Story, Meta } from '@storybook/react';
import { Card, CardProps } from './card';

export default {
  component: Card,
  title: 'Card',
} as Meta;

const Template: Story<CardProps> = (args) => (
  <div
    style={{
      position: 'absolute',
      top: '40%',
      width: '100%',
    }}
  >
    <Card {...args} title={'Create New Feedback'}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ipsam nemo
        iusto aperiam, ipsa laboriosam magni eveniet ea laborum quo?
      </p>
    </Card>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Test',
};
