import styled, { css } from 'styled-components';
import { Box } from '@sd/product-feedback-ui-components';
import Link from 'next/link';
/* eslint-disable-next-line */
export interface RoadmapOverviewProps {}

const StyledRoadmapOverview = styled(Box)``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const RoadmapHeader = styled.h4``;
const Stack = styled.div`
  --space: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: var(--space);
  }
`;
type FeedbackStatusType = 'PLANNED' | 'IN_PROGRESS' | 'LIVE';
const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const ListItem = styled.li``;
const LineItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
`;
const BulletMarker = styled.div<{ statusType: FeedbackStatusType }>`
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  margin-right: 1em;
  ${(props) => {
    if (props.statusType === 'PLANNED') {
      return css`
        background: orange;
      `;
    }
    if (props.statusType === 'IN_PROGRESS') {
      return css`
        background: purple;
      `;
    }
    if (props.statusType === 'LIVE') {
      return css`
        background: #62bcfa;
      `;
    }
    return css`
      background: black;
    `;
  }};
`;

interface StatusLineItemProps {
  statusType: FeedbackStatusType;
  amount: number;
}
const StatusLineItem = ({ statusType, amount = 0 }: StatusLineItemProps) => {
  return (
    <ListItem>
      <LineItem>
        <BulletMarker statusType={statusType} />
        <span>{statusType}</span> <span>{amount}</span>
      </LineItem>
    </ListItem>
  );
};
export function RoadmapOverview(props: RoadmapOverviewProps) {
  return (
    <StyledRoadmapOverview>
      <Header>
        <RoadmapHeader>Roadmap</RoadmapHeader>
        <Link href={'/roadmap'}>
          <a>View</a>
        </Link>
      </Header>
      <List>
        <Stack>
          <StatusLineItem statusType={'PLANNED'} amount={3} />
          <StatusLineItem statusType={'IN_PROGRESS'} amount={3} />
          <StatusLineItem statusType={'LIVE'} amount={3} />
        </Stack>
      </List>
    </StyledRoadmapOverview>
  );
}

export default RoadmapOverview;
