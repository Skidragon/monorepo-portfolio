import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProductFeedbackFeatureFeedbackProps {}

const StyledProductFeedbackFeatureFeedback = styled.div`
  color: pink;
`;

export function ProductFeedbackFeatureFeedback(
  props: ProductFeedbackFeatureFeedbackProps
) {
  return (
    <StyledProductFeedbackFeatureFeedback>
      <h1>Welcome to product-feedback-feature-feedback!</h1>
    </StyledProductFeedbackFeatureFeedback>
  );
}

export default ProductFeedbackFeatureFeedback;
