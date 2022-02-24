import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  // Button Style Flavor
  variant?: 'primary' | 'secondary' | 'tertiary';
  invert?: boolean;
}
const StyledButton = styled.button<ButtonProps>`
  padding: 1em 2em;
  position: relative;
  cursor: pointer;
  transition: all 250ms;
  font-weight: $fw-700;
  ${(props) => {
    if (props.variant === 'primary') {
      return css`
        background: var(--primary-color);
        color: var(--white, white);
        border: $border-type var(--primary-color);
        &:hover,
        &:focus,
        &:active {
          filter: brightness(120%);
          background: var(--primary-color);
          border: $border-type var(--primary-color);
        }
      `;
    }
    if (props.variant === 'secondary') {
      return css`
        background: transparent;
        color: var(--secondary-color, black);
        border: $border-type var(--secondary-color, black);
        &:hover,
        &:focus,
        &:active {
          background: var(--secondary-color, black);
          color: var(--white, white);
        }
      `;
    }
    if (props.variant === 'tertiary') {
      return css`
        display: flex;
        background: transparent;
        border: $border-type transparent;
        color: var(--light-black, black);
        &:hover,
        &:focus,
        &:active {
          color: var(--primary-color);
        }
        &::after {
          content: '>';
          margin-left: 0.5em;
          color: var(--primary-color);
        }
      `;
    }
    return css``;
  }}
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', children, invert = false, ...props }: ButtonProps,
    ref
  ) => {
    return (
      <StyledButton variant={variant} invert={invert} {...props} ref={ref}>
        {children}
      </StyledButton>
    );
  }
);

export default Button;
