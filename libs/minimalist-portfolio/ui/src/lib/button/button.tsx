import styled, { css } from 'styled-components';
import React from 'react';
/* eslint-disable-next-line */
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: 'primary' | 'secondary';
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  ${(props) => {
    if (props.variant === 'primary') {
      return css`
        display: inline-flex;
        text-decoration: none;
        align-items: center;
        background: var(--dark-blue);
        color: white;
        text-transform: uppercase;
        padding: 1em;
        cursor: pointer;
        &:hover {
          background: #5fb4a2;
          stroke: white;
        }
      `;
    } else if (props.variant === 'secondary') {
      return css`
        border: 2px solid var(--dark-blue);
        padding: 1em;
        &:hover {
          color: white;
          background: var(--dark-blue);
        }
      `;
    }
    return css``;
  }}
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', ...props }: ButtonProps, ref) => {
    return <StyledButton variant={variant} {...props} ref={ref} />;
  }
);

export default Button;
