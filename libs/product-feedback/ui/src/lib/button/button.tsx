import styled, { css } from 'styled-components';
import { BaseButton, ButtonExtended } from '@sd/react-component-types';
import React from 'react';
/* eslint-disable-next-line */
export interface ButtonProps extends BaseButton, ButtonExtended {
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonExtended>`
  filter: brightness(120%);
  border-radius: 6px;
  padding: 1em;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border: unset;
  text-transform: capitalize;
  &:hover {
    filter: brightness(140%);
  }
  &:active {
    box-shadow: unset;
    filter: brightness(100%);
  }
  ${(props) =>
    props.Icon &&
    css`
      display: inline-flex;
      align-items: baseline;
      margin-inline-end: 1rem;
      .icon {
        width: 0.75em;
        width: 1cap;
        height: 0.75em;
        height: 1cap;
      }
    `}
  ${(props) => {
    if (props.variant === 'primary') {
      return css`
        color: var(--color-text-button-primary, white);
        background: var(--color-text-button-primary, #ad1fea);
      `;
    }
    if (props.variant === 'secondary') {
      return css`
        color: var(--color-text-button-secondary, white);
        background: var(--color-text-button-secondary, #4661e6);
      `;
    }
    if (props.variant === 'tertiary') {
      return css`
        color: var(--color-text-button-tertiary, white);
        background: var(--color-text-button-tertiary, #373f68);
      `;
    }
    if (props.variant === 'error') {
      return css`
        color: var(--color-text-button-error, white);
        background: var(--color-text-button-error, red);
      `;
    }
    if (props.variant === 'success') {
      return css`
        color: var(--color-text-button-success, white);
        background: var(--color-text-button-success, green);
      `;
    }
    return css`
      color: var(--color-text-button-default, #4661e6);
      background: var(--color-text-button-default, #f2f4fe);
    `;
  }}
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <StyledButton variant={props.variant} {...props} ref={ref}>
        {props.Icon && React.cloneElement(props.Icon, { className: 'icon' })}
        {props.children}
      </StyledButton>
    );
  }
);

export default Button;
