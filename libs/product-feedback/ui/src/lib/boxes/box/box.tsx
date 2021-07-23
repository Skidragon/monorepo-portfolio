import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BoxProps {
  //TODO: implement a math formula with the box shadow
  elevate: number;
}

export const Box = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: var(--space-padding-box, 1em);
  border-radius: 6px;
`;

export default Box;
