import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LineItemProps {
  children: React.ReactNode;
}

const StyledLineItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

export function LineItem(props: LineItemProps) {
  return <StyledLineItem>{props.children}</StyledLineItem>;
}

export default LineItem;
