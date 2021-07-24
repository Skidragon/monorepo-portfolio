import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RoadmapFeedbackStatusTabsProps {}
const StyledRoadmapFeedbackStatusTabs = styled.div`
  color: pink;
`;
// https://material-ui.com/components/tabs/
const AppBar = styled.div`
  display: flex;
  align-items: center;
`;
const Tabs = styled.div`
  display: flex;
`;
const Tab = styled.div``;
export function RoadmapFeedbackStatusTabs(
  props: RoadmapFeedbackStatusTabsProps
) {
  return (
    <StyledRoadmapFeedbackStatusTabs>
      <h1>Welcome to roadmap-feedback-status-tabs!</h1>
    </StyledRoadmapFeedbackStatusTabs>
  );
}

export default RoadmapFeedbackStatusTabs;
