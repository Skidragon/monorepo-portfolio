import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CreateProductProps {}

const StyledCreateProduct = styled.div`
  color: pink;
`;

export function CreateProduct(props: CreateProductProps) {
  return (
    <StyledCreateProduct>
      <h1>Welcome to create-product!</h1>
    </StyledCreateProduct>
  );
}

export default CreateProduct;
