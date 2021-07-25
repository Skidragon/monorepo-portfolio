import styled from 'styled-components';
import {
  Tabs as ReachTabs,
  TabList as ReachTabList,
  Tab as ReachTab,
  TabPanels as ReachTabPanels,
  TabPanel as ReachTabPanel,
  TabsProps as ReachTabsProps,
  TabProps as ReachTabProps,
  useTabsContext,
} from '@reach/tabs';
import React, { useState, useRef, useContext } from 'react';
import { useRect, RectProps } from '@reach/rect';

/* eslint-disable-next-line */

const StyledTabs = styled(ReachTabs)``;
export const TabList = styled(ReachTabList)`
  border-bottom: 2px solid lightgrey;
`;
const StyledTab = styled(ReachTab)`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin: 0;
  padding: 1em 2em;
  text-transform: capitalize;
`;
export const TabPanels = styled(ReachTabPanels)``;
export const TabPanel = styled(ReachTabPanel)``;

const AnimatedContext = React.createContext<React.Dispatch<
  React.SetStateAction<DOMRect | null>
> | null>(null);

export const Tabs: React.FunctionComponent<ReachTabsProps> = ({
  children,
  ...rest
}) => {
  const [activeRect, setActiveRect] =
    useState<ReturnType<typeof useRect>>(null);
  const ref = useRef();
  const rect = useRect(ref, {});

  return (
    <AnimatedContext.Provider value={setActiveRect}>
      <StyledTabs
        {...rest}
        ref={ref}
        style={{ ...(rest?.style || {}), position: 'relative' }}
      >
        <div
          style={{
            position: 'absolute',
            height: 2,
            background: 'lightblue',
            transition: 'all 300ms ease',
            left: (activeRect?.left ?? 0) - (rect?.left ?? 0),
            top: (activeRect?.bottom ?? 0) - (rect?.top ?? 0),
            width: activeRect?.width ?? 0,
          }}
        >
          {children}
        </div>
      </StyledTabs>
    </AnimatedContext.Provider>
  );
};

export const Tab: React.FunctionComponent<ReachTabProps> = ({
  index,
  ...props
}) => {
  const { selectedIndex } = useTabsContext();
  const isSelected = selectedIndex === index;

  const ref = React.useRef();
  const rect = useRect(ref, { observe: isSelected });

  const setActiveRect = useContext(AnimatedContext);

  React.useLayoutEffect(() => {
    if (isSelected && setActiveRect) {
      setActiveRect(rect);
    }
  }, [isSelected, rect, setActiveRect]);
  console.log(props.style);
  return (
    <StyledTab
      ref={ref}
      {...props}
      style={{
        ...props.style,
        border: 'none',
      }}
    />
  );
};
// import {
//   Tabs,
//   TabList,
//   Tab,
//   TabPanels,
//   TabPanel
// } from '@sd/product-feedback-ui-components'
