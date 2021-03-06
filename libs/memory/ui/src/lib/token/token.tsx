import React from 'react';
import styled, { css } from 'styled-components';
import { TokenState } from '@sd/memory/types';
/* eslint-disable-next-line */
export interface TokenProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  state: TokenState;
}

const StyledToken = styled.button<Pick<TokenProps, 'state'>>`
  display: inline-block;
  padding: 1.8em;
  color: white;
  background: var(--blue-400);
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  &:focus {
    box-shadow: 0px 0px 0px 6px lightblue;
    outline: none;
  }
  ${(props) => {
    const { state } = props;
    if (state === 'HIGHLIGHT') {
      return css`
        background: var(--blue-200, lightblue);
        color: white;
      `;
    }
    if (state === 'MATCH') {
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
`;

export const Token = React.forwardRef<HTMLButtonElement, TokenProps>(
  ({ children, state = 'HIDE_VALUE', ...props }, ref) => {
    return (
      <StyledToken {...props} state={state} ref={ref}>
        {state !== 'HIDE_VALUE' ? (
          <Value state={state}>{children}</Value>
        ) : null}
      </StyledToken>
    );
  }
);

export default Token;
