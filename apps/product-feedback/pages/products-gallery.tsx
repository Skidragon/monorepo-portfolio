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
type ProductCardProps = {
  title: string;
  description: string;
  id: string | number;
};
const ProductCard: React.FunctionComponent<ProductCardProps> = ({
  title,
  description,
  id,
}) => {
  return (
    <Card title={title}>
      <Stack>
        <p>{description}</p>
        <Link href={`/product/${id}/feedbacks`} passHref={true}>
          <Button variant={'secondary'} fullWidth={true}>
            {`${title} ▶️`}
          </Button>
        </Link>
      </Stack>
    </Card>
  );
};
const products: ProductCardProps[] = [
  {
    title: 'Frontend Mentor',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, distinctio!',
    id: 1,
  },
  {
    title: 'Product Feedback',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, distinctio!',
    id: 2,
  },
  {
    title: 'Linkedin',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, distinctio!',
    id: 3,
  },
];
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
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </ProductsGrid>
    </StyledProductsGallery>
  );
}

export default ProductsGallery;
