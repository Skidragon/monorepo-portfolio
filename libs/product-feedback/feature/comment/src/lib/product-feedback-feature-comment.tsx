import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProductFeedbackFeatureCommentProps {}

const StyledProductFeedbackFeatureComment = styled.div`
  color: pink;
`;

export function ProductFeedbackFeatureComment(
  props: ProductFeedbackFeatureCommentProps
) {
  return (
    <StyledProductFeedbackFeatureComment>
      <h1>Welcome to product-feedback-feature-comment!</h1>
    </StyledProductFeedbackFeatureComment>
  );
}

export default ProductFeedbackFeatureComment;
