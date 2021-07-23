import { Box, Button } from '@sd/product-feedback-ui-components';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FeedbacksCategoryFilterProps {}

const StyledFeedbacksCategoryFilter = styled(Box)`
  color: pink;
`;

const Cluster = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space, 1rem);
  justify-content: flex-start;
  align-items: center;
`;
export function FeedbacksCategoryFilter(props: FeedbacksCategoryFilterProps) {
  return (
    <StyledFeedbacksCategoryFilter>
      <Cluster>
        <Button>All</Button>
        <Button>UI</Button>
        <Button>UX</Button>
        <Button>Enahncement</Button>
        <Button>Bug</Button>
        <Button>Feature</Button>
      </Cluster>
    </StyledFeedbacksCategoryFilter>
  );
}

export default FeedbacksCategoryFilter;
