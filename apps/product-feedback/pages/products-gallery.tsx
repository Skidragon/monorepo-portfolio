import styled from 'styled-components';
import {
  Button,
  Card,
  Dropdown,
  DropdownItem,
} from '@sd/product-feedback-ui-components';
import Link from 'next/link';
import { useState } from 'react';
/* eslint-disable-next-line */

export interface ProductsGalleryProps {
  placeholder?: never;
}

const StyledProductsGallery = styled.div``;
const ProductBar = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-secondary);
  padding: 1.5em;
`;
const Title = styled.h1`
  color: white;
`;
const AddProductButton = styled(Button)`
  margin-left: auto;
`;
const Grid = styled.section`
  display: grid;
  column-gap: 2rem;
  row-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 20rem;
  align-items: stretch;
  margin-top: 4rem;
`;
const BreakoutButton = styled(Button)`
  margin-top: 2rem;
  width: 100%;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
export function ProductsGallery(props: ProductsGalleryProps) {
  const [item, setItem] = useState<DropdownItem>({
    value: 'public',
    label: 'Public Products',
  });
  return (
    <StyledProductsGallery>
      <ProductBar>
        <div>
          <Title>Product Gallery</Title>
          <Dropdown
            label={'Show'}
            selectedItem={item}
            onSelectedItemChange={(changes) => {
              setItem(changes.selectedItem);
            }}
            items={[
              {
                value: 'public',
                label: 'Public Products',
              },
              {
                value: 'private',
                label: 'Private Products',
              },
            ]}
          />
        </div>
        <AddProductButton variant={'primary'}>+ Add Product</AddProductButton>
      </ProductBar>
      <Grid>
        <Card title={'Frontend Mentor'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eius
          beatae doloremque sed eveniet non!
          <Link href={'#'} passHref={true}>
            <BreakoutButton variant={'secondary'}>
              Frontend Mentor ▶️
            </BreakoutButton>
          </Link>
        </Card>
        <Card title={'Product Feedback'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eius
          beatae doloremque sed eveniet non!
          <BreakoutButton variant={'secondary'}>
            Product Feedback ▶️
          </BreakoutButton>
        </Card>
        <Card title={'Linkedin'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eius
          beatae doloremque sed eveniet non!
          <BreakoutButton variant={'secondary'}>Linkedin ▶️</BreakoutButton>
        </Card>
      </Grid>
    </StyledProductsGallery>
  );
}

export default ProductsGallery;
