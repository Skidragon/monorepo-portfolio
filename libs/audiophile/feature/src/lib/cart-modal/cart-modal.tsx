import styled from 'styled-components';
import Image from 'next/image';
import React from 'react';
import { StepperField, Button, Price } from '@sd/audiophile/ui';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Item, useCart } from 'react-use-cart';
/* eslint-disable-next-line */

export interface CartModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  products: Item[];
  open: boolean;
  onRemoveAll: () => void;
}

const StyledCartModal = styled.div<Pick<CartModalProps, 'open'>>`
  display: ${(props) => (props.open ? 'inline-block' : 'none')};
  z-index: 1001;
  background: white;
  border-radius: 1rem;
  padding: 2em;
  width: 100%;
  max-width: 150ch;
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
  align-items: baseline;
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
const CartButton = styled(Button)`
  width: 100%;
`;

export const CartModal = React.forwardRef<HTMLDivElement, CartModalProps>(
  ({ onRemoveAll, ...props }: CartModalProps, ref) => {
    const {
      removeItem,
      totalItems,
      items: products,
      updateItemQuantity,
    } = useCart();
    const total = products.reduce((acc, currentProduct) => {
      return acc + currentProduct.price * (currentProduct?.quantity || 1);
    }, 0);
    return (
      <StyledCartModal {...props} ref={ref}>
        <CartHeader>
          <h3>Cart ({totalItems})</h3>
          <RemoveAllButton onClick={onRemoveAll}>Remove All</RemoveAllButton>
        </CartHeader>
        <CartList>
          {products.map((product) => {
            return (
              <CartProduct key={`${product.name}`}>
                <Image
                  src={product.image.url}
                  height={48}
                  width={48}
                  layout="fixed"
                />
                <ProductInfo>
                  <Name>{product.name}</Name>
                  <Price cents={product.price} />
                </ProductInfo>
                <StepperField
                  quantity={product.quantity}
                  onIncrease={(ctx) => {
                    updateItemQuantity(product.id, ctx.quantity);
                  }}
                  onDecrease={(ctx) => {
                    if (product.quantity === 0) {
                      removeItem(product.id);
                    } else {
                      updateItemQuantity(product.id, ctx.quantity);
                    }
                  }}
                />
              </CartProduct>
            );
          })}
        </CartList>
        <CartFooter>
          <TotalLine>
            <div>Total</div>
            <Price cents={total} />
          </TotalLine>
          <CartButton variant="primary" disabled={Boolean(totalItems === 0)}>
            Checkout
          </CartButton>
        </CartFooter>
      </StyledCartModal>
    );
  }
);

export default CartModal;
