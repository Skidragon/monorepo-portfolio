import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
interface PriceProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  cents: number;
}
const StyledPrice = styled.div``;
const formatPrice = (cents: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(cents / 100);
};

export const Price = React.forwardRef<HTMLDivElement, PriceProps>(
  ({ cents, ...props }, ref) => {
    return (
      <StyledPrice {...props} ref={ref}>
        {formatPrice(cents)}
      </StyledPrice>
    );
  }
);

export default Price;
