import styled from 'styled-components';
import {
  Tabs as ReachTabs,
  TabList as ReachTabList,
  Tab as ReachTab,
  TabPanels as ReachTabPanels,
  TabPanel as ReachTabPanel,
  TabProps as ReachTabProps,
  useTabsContext,
} from '@reach/tabs';

/* eslint-disable-next-line */

export const Tabs = styled(ReachTabs)``;
export const TabList = styled(ReachTabList)`
  display: inline-block;
  border-bottom: 3px solid #8c92b3;
`;
interface TabProps extends ReachTabProps {
  borderColor?: string;
}
export const StyledTab = styled(ReachTab)<{ style: React.CSSProperties }>`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin: 0;
  padding: 1em;
  text-transform: capitalize;
  font-weight: 600;
`;
export const Tab: React.FunctionComponent<TabProps> = ({
  index,
  borderColor,
  ...props
}) => {
  const { selectedIndex } = useTabsContext();
  const isSelected = selectedIndex === index;
  return (
    <StyledTab
      style={{
        borderBottom: isSelected
          ? `5px solid ${borderColor || 'black'}`
          : 'none',
        color: isSelected ? 'black' : 'lightgrey',
      }}
      {...props}
    />
  );
};
export const TabPanels = styled(ReachTabPanels)``;
export const TabPanel = styled(ReachTabPanel)``;

// import {
//   Tabs,
//   TabList,
//   Tab,
//   TabPanels,
//   TabPanel
// } from '@sd/product-feedback-ui-components'
