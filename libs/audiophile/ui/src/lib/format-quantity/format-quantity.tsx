import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FormatQuantityProps {
  quantity: number;
}

const StyledFormatQuantity = styled.div`
  color: pink;
`;
export const formatQuantity = (quantity: number) => {
  return `${quantity}x`;
};

export function FormatQuantity(props: FormatQuantityProps) {
  return (
    <StyledFormatQuantity>
      {formatQuantity(props.quantity)}
    </StyledFormatQuantity>
  );
}

export default FormatQuantity;
