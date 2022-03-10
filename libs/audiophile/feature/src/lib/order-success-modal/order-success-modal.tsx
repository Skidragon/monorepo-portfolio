import styled from 'styled-components';
import { LinkButton, ModalBackdrop, Price } from '@sd/audiophile/ui';
import { Item } from 'react-use-cart';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface OrderSuccessModalProps {
  items: Item[];
  total: number;
}

const StyledOrderSuccessModal = styled.div`
  display: flex;
  flex-flow: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
  width: 100%;
  max-width: 80ch;
  margin: 0.5rem;
  background: white;
  border-radius: 1rem;
  & > * + * {
    margin-top: 1rem;
  }
`;
const Heading = styled.h2`
  text-transform: uppercase;
`;
const OrderSummary = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  @media screen and (min-width: 40em) {
    grid-template-rows: auto;
    grid-template-columns: auto auto;
  }
`;
const ProductContainer = styled.div`
  background: lightgrey;
  padding: 0.5em;
`;
const ProductLine = styled.div`
  display: flex;
  max-width: 40ch;
  margin: 1rem 0;
`;
const Divider = styled.div`
  background: grey;
  height: 3px;
`;
const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 1rem;
`;
const Quantity = styled.div``;
const GrandTotal = styled.div`
  display: flex;
  flex-flow: column;
  background: black;
  color: white;
  font-size: 1.2rem;
  padding: 0.5em;
  @media screen and (min-width: 40em) {
    justify-content: center;
  }
`;
export function OrderSuccessModal({
  items = [],
  total,
}: OrderSuccessModalProps) {
  const firstItem = items[0];
  const totalQuantity = items.slice(1).reduce((acc, current) => {
    return acc + (current?.quantity || 0);
  }, 0);
  return (
    <ModalBackdrop>
      <StyledOrderSuccessModal>
        <Heading>Thank You for your order!</Heading>
        <p>
          You will receive an email confirmation for your order when the
          developer implements it.
        </p>
        <OrderSummary>
          <ProductContainer style={{ background: 'lightgrey', padding: '2em' }}>
            <ProductLine>
              <Image
                width={64}
                height={64}
                src={items[0].image.url}
                layout="fixed"
              />
              <ProductInfo>
                <div>
                  <div>{firstItem.name}</div>
                  <Price cents={firstItem.price} />
                </div>
                <Quantity>x{firstItem.quantity}</Quantity>
              </ProductInfo>
            </ProductLine>
            <Divider />
            {totalQuantity > 1 ? (
              <div>and {totalQuantity - 1} other item(s)</div>
            ) : null}
          </ProductContainer>
          <GrandTotal>
            <div>Grand Total</div>
            <Price cents={total} />
          </GrandTotal>
        </OrderSummary>
        <LinkButton href={'/'}>Back To Home</LinkButton>
      </StyledOrderSuccessModal>
    </ModalBackdrop>
  );
}

export default OrderSuccessModal;
