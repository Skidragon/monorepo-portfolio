import styled, { css } from 'styled-components';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
/* eslint-disable-next-line */

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  // Button Style Flavor
  variant?: 'primary' | 'secondary' | 'tertiary';
  invert?: boolean;
  isSubmitting?: boolean;
}

const StyledButton = styled.button<Pick<ButtonProps, 'variant'>>`
  display: inline-block;
  padding: 0.5em 1.25em;
  border-radius: 5rem;
  ${(props) => {
    if (props.variant === 'primary') {
      return css`
        color: white;
        background: var(--orange, orange);
      `;
    }
    return css`
      background: var(--blue-100, lightblue);
      color: var(--blue-500, blue);
    `;
  }}
`;
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    return (
      <StyledButton {...props} ref={ref}>
        {props.children}
      </StyledButton>
    );
  }
);

export default Button;
