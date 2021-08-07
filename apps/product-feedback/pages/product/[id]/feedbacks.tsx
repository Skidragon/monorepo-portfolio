import styled from 'styled-components';
import {
  FeedbacksCategoryFilter,
  NoFeedbacksCard,
  Feedbacks as FeedbacksList,
} from '@sd/product-feedback/feature/feedback';
import { ProductFeedbackBoardCard } from '@sd/product-feedback/feature/product';
import { RoadmapOverview } from '@sd/product-feedback/feature/roadmap';
/* eslint-disable-next-line */
export interface FeedbacksProps {}

const StyledFeedbacks = styled.div``;
const ProductOverviewContainer = styled.div`
  display: flex;
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
