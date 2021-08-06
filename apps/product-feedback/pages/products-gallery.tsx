import styled from 'styled-components';
import {
  Button,
  Dropdown,
  DropdownOption,
} from '@sd/product-feedback-ui-components';
/* eslint-disable-next-line */

export interface ProductsGalleryProps {
  placeholder?: never;
}

const StyledProductsGallery = styled.div``;
const ProductBar = styled.div`
  display: flex;
  background: var(--color-secondary);
  padding: 1.5em;
`;
const Title = styled.h1`
  color: white;
`;
const AddProductButton = styled(Button)`
  margin-left: auto;
`;
export function ProductsGallery(props: ProductsGalleryProps) {
  return (
    <StyledProductsGallery>
      <ProductBar>
        <Title>Product Gallery</Title>
        <Dropdown
          onOptionChange={(e) => {
            console.log(e);
          }}
          label={'Product Scope'}
          value={'public'}
          isOpen={false}
        >
          <DropdownOption value={'public'}>Public</DropdownOption>
          <DropdownOption value={'private'}>Private</DropdownOption>
        </Dropdown>
        <AddProductButton variant={'primary'}>+ Add Product</AddProductButton>
      </ProductBar>
    </StyledProductsGallery>
  );
}

export default ProductsGallery;
