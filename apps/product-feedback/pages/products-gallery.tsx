import styled from 'styled-components';
import {
  Button,
  Card,
  Dropdown,
  DropdownItem,
} from '@sd/product-feedback-ui-components';
import Link from 'next/link';
import { useState } from 'react';
import { Stack, Grid } from '@sd/react-layout-styled-components';
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
const ProductsGrid = styled(Grid)`
  padding: 1rem;
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
        <Link href={'/create-product'} passHref={true}>
          <AddProductButton variant={'primary'}>+ Add Product</AddProductButton>
        </Link>
      </ProductBar>
      <ProductsGrid rowGap={3} columnGap={2}>
        <Card title={'Frontend Mentor'}>
          <Stack>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eius
              beatae doloremque sed eveniet non!
            </p>
            <Link href={'/product/1/feedbacks'} passHref={true}>
              <Button variant={'secondary'} fullWidth={true}>
                Frontend Mentor ▶️
              </Button>
            </Link>
          </Stack>
        </Card>
        <Card title={'Product Feedback'}>
          <Stack>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eius
              beatae doloremque sed eveniet non!
            </p>
            <Button variant={'secondary'} fullWidth={true}>
              Product Feedback ▶️
            </Button>
          </Stack>
        </Card>
        <Card title={'Linkedin'}>
          <Stack>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eius
              beatae doloremque sed eveniet non!
            </p>
            <Button variant={'secondary'} fullWidth={true}>
              Linkedin ▶️
            </Button>
          </Stack>
        </Card>
      </ProductsGrid>
    </StyledProductsGallery>
  );
}

export default ProductsGallery;
