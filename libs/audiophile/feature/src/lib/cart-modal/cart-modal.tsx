import styled from 'styled-components';
import Image from 'next/image';
import { StepperField, Button } from '@sd/audiophile/ui';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
/* eslint-disable-next-line */
interface Product {
  name: string;
  price: number;
  src: string;
}
export interface CartModalProps {
  products: Product[];
}
const Overlay = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #0000003d;
`;
const StyledCartModal = styled.div`
  position: absolute;
  z-index: 1001;
  background: white;
  border-radius: 1rem;
  padding: 2em;
  width: 100%;
  max-width: 50ch;
  & > * + * {
    margin-top: 2rem;
  }
`;
const RemoveAllButton = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  &:hover,
  &:focus {
    color: orange;
    text-decoration: underline;
  }
`;
const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > * + * {
    margin-left: 1rem;
  }
`;
const CartList = styled.ul`
  padding: 0;
  & > * + * {
    margin-top: 1rem;
  }
`;
const CartProduct = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
`;
const ProductInfo = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  align-items: space-between;
`;
const Name = styled.div``;

const TotalLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > * + * {
    margin-left: 1rem;
  }
`;
const CartFooter = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`;

const formatPrice = (cents: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
  return formatter.format(cents / 100);
};
interface PriceProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cents: number;
}
function Price({ cents, ...props }: PriceProps) {
  return <div {...props}>{formatPrice(cents)}</div>;
}
export function CartModal({ products = [] }: CartModalProps) {
  const total = products.reduce((acc, currentProduct) => {
    return acc + currentProduct.price;
  }, 0);
  return (
    <>
      <Overlay />
      <StyledCartModal>
        <CartHeader>
          <h3>Cart ({products.length})</h3>
          <RemoveAllButton>Remove All</RemoveAllButton>
        </CartHeader>
        <CartList>
          {products.map((product) => {
            return (
              <CartProduct>
                <Image
                  src={product.src}
                  height={48}
                  width={48}
                  layout="fixed"
                />
                <ProductInfo>
                  <Name>{product.name}</Name>
                  <Price cents={product.price} />
                </ProductInfo>
                <StepperField />
              </CartProduct>
            );
          })}
        </CartList>
        <CartFooter>
          <TotalLine>
            <div>Total</div>
            <Price cents={total} />
          </TotalLine>
          <Button variant="primary">Checkout</Button>
        </CartFooter>
      </StyledCartModal>
    </>
  );
}

export default CartModal;
