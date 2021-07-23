import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProductFeedbackFeatureProjectProps {}

const StyledProductFeedbackFeatureProject = styled.div`
  color: pink;
`;

export function ProductFeedbackFeatureProject(
  props: ProductFeedbackFeatureProjectProps
) {
  return (
    <StyledProductFeedbackFeatureProject>
      <h1>Welcome to product-feedback-feature-project!</h1>
    </StyledProductFeedbackFeatureProject>
  );
}

export default ProductFeedbackFeatureProject;
