import styled from 'styled-components';
import {
  FeedbacksCategoryFilter,
  NoFeedbacksCard,
  Feedbacks as FeedbacksList,
} from '@sd/product-feedback/feature/feedback';
import { ProductFeedbackBoardCard } from '@sd/product-feedback/feature/product';
import { RoadmapOverview } from '@sd/product-feedback/feature/roadmap';
import { Stack } from '@sd/react-layout-styled-components';

/* eslint-disable-next-line */
export interface FeedbacksProps {}

const StyledFeedbacks = styled(Stack)`
  padding: var(--flow);
`;
const ProductOverviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: var(--flow);
`;
export function Feedbacks(props: FeedbacksProps) {
  return (
    <StyledFeedbacks>
      <ProductOverviewContainer>
        <ProductFeedbackBoardCard />
        <FeedbacksCategoryFilter
          data={['All', 'UI', 'UX', 'Bug', 'Enhanced', 'Feature']}
          value={'All'}
          style={{
            maxWidth: '200px',
          }}
          onClick={() => {
            console.log('');
          }}
        />
        <RoadmapOverview />
      </ProductOverviewContainer>
      <FeedbacksList data={[]} loading={false} />
    </StyledFeedbacks>
  );
}

export default Feedbacks;
