import styled from 'styled-components';

/* eslint-disable-next-line */
export interface QuantityProps {
  quantity: number;
}

const StyledQuantity = styled.div`
  color: pink;
`;
export const formatQuantity = (quantity: number) => {
  return `x${quantity}`;
};
export function Quantity(props: QuantityProps) {
  return (
    <StyledQuantity {...props}>{formatQuantity(props.quantity)}</StyledQuantity>
  );
}

export default Quantity;
