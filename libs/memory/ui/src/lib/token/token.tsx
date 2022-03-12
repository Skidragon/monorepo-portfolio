import React from 'react';
import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export type TokenState = 'HIDDEN' | 'SELECTED' | 'FOUND_MATCH';
export interface TokenProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  state: TokenState;
}

const StyledToken = styled.button<Pick<TokenProps, 'state'>>`
  display: inline-block;
  padding: 2em;
  color: white;
  background: var(--blue-400);
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  &:focus {
    box-shadow: 0px 0px 0px 6px var(--orange, orange);
  }
  ${(props) => {
    const { state } = props;
    if (state === 'SELECTED') {
      return css`
        background: var(--blue-100, lightblue);
        color: white;
      `;
    }
    if (state === 'FOUND_MATCH') {
      return css`
        background: var(--orange, orange);
      `;
    }
    return css``;
  }}
`;
const Value = styled.div<Pick<TokenProps, 'state'>>`
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  ${(props) =>
    props.state === 'HIDDEN' &&
    css`
      display: none;
    `}
`;

export const Token = React.forwardRef<HTMLButtonElement, TokenProps>(
  ({ children, state = 'HIDDEN', ...props }, ref) => {
    return (
      <StyledToken {...props} state={state} ref={ref}>
        <Value state={state}>{children}</Value>
      </StyledToken>
    );
  }
);

export default Token;
