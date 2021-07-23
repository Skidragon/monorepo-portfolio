import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FeedbacksCategoryFilterProps {}

const StyledFeedbacksCategoryFilter = styled.div`
  color: pink;
`;

export function FeedbacksCategoryFilter(props: FeedbacksCategoryFilterProps) {
  return (
    <StyledFeedbacksCategoryFilter>
      <h1>Welcome to feedbacks-category-filter!</h1>
    </StyledFeedbacksCategoryFilter>
  );
}

export default FeedbacksCategoryFilter;
