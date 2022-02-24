import styled from 'styled-components';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
/* eslint-disable-next-line */
export interface FormatPriceProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  price: number;
}

const StyledFormatPrice = styled.div``;
export const formatMoney = (price: number) => {
  return `$${new Intl.NumberFormat('en-US').format(price / 100)}`;
};

export function FormatPrice(props: FormatPriceProps) {
  return <StyledFormatPrice>{formatMoney(props.price)}</StyledFormatPrice>;
}

export default FormatPrice;
