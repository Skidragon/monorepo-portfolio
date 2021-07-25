import { Story, Meta } from '@storybook/react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './tabs';
export default {
  component: Tabs,
  title: 'Tabs',
} as Meta;

const Template: Story = (args) => {
  return (
    <Tabs>
      <TabList style={{ width: 400 }}>
        <Tab index={0}>One</Tab> <Tab index={1}>Two</Tab>{' '}
        <Tab index={2}>Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
