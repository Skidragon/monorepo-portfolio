import { Story, Meta } from '@storybook/react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './tabs';
export default {
  component: Tabs,
  title: 'Tabs',
} as Meta;

const Template: Story = (args) => {
  return (
    <Tabs>
      <TabList>
        <Tab borderColor={'orange'} index={0}>
          Planned (5)
        </Tab>{' '}
        <Tab borderColor={'purple'} index={1}>
          In-Progress (1)
        </Tab>
        <Tab borderColor={'lightblue'} index={2}>
          Live (2)
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>Planned!</p>
        </TabPanel>
        <TabPanel>
          <p>Progress!</p>
        </TabPanel>
        <TabPanel>
          <p>Live!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
