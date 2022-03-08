import { Price } from '@sd/audiophile/ui';
import './add-product-card.module.css';
import styled from 'styled-components';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface AddProductCardProps {
  name: string;
  description: string;
  cents: number;
  isNew?: boolean;
  src: string;
  children: React.ReactNode;
}
const StyledAddProductCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  max-width: 80ch;
  grid-gap: 1rem;
  & > * + * {
    margin-top: var(--flow, 1.5rem);
  }
  @media screen and (min-width: 70em) {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    max-width: 160ch;
  }
`;
const ProductImage = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
  background: lightgrey;
`;
const Content = styled.div`
  display: flex;
  flex-flow: column;
  text-align: left;
  & > * + * {
    margin-top: var(--flow, 1.5rem);
  }
  @media screen and (min-width: 70em) {
    align-items: flex-start;
    justify-content: center;
  }
`;
const Description = styled.p``;
const Actions = styled.div`
  display: flex;
  align-self: center;
  & > * + * {
    margin-left: 1rem;
  }
  @media screen and (min-width: 70em) {
    align-self: flex-start;
  }
`;
export function AddProductCard({
  name,
  description,
  cents,
  isNew,
  src,
  children,
}: AddProductCardProps) {
  return (
    <StyledAddProductCard>
      <ProductImage>
        <Image src={src} alt="" layout="fill" objectFit="cover" />
      </ProductImage>
      <Content>
        {isNew && <div>New Product</div>}
        <h2>{name}</h2>
        <Description>{description}</Description>
        <Price
          style={{
            fontSize: '1.5rem',
          }}
          cents={cents}
        />
        <Actions>{children}</Actions>
      </Content>
    </StyledAddProductCard>
  );
}

export default AddProductCard;
