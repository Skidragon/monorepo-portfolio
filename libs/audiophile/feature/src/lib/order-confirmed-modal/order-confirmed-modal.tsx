import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OrderConfirmedModalProps {}

const StyledOrderConfirmedModal = styled.div`
  color: pink;
`;

export function OrderConfirmedModal(props: OrderConfirmedModalProps) {
  return (
    <StyledOrderConfirmedModal>
      <h1>Welcome to OrderConfirmedModal!</h1>
    </StyledOrderConfirmedModal>
  );
}

export default OrderConfirmedModal;
