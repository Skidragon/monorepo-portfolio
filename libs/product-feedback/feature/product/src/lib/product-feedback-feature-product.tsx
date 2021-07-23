import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ProductFeedbackFeatureProductProps {}

const StyledProductFeedbackFeatureProduct = styled.div`
  color: pink;
`;

export function ProductFeedbackFeatureProduct(
  props: ProductFeedbackFeatureProductProps
) {
  return (
    <StyledProductFeedbackFeatureProduct>
      <h1>Welcome to product-feedback-feature-product!</h1>
    </StyledProductFeedbackFeatureProduct>
  );
}

export default ProductFeedbackFeatureProduct;
