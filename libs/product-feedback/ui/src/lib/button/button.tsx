import styled, { css } from 'styled-components';
import { BaseButton, ButtonExtended } from '@sd/react-component-types';
import React from 'react';
/* eslint-disable-next-line */
export interface ButtonProps extends BaseButton, ButtonExtended {
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonExtended>`
  appearance: none;
  border: none;
  outline: none;
  --color-text: #4661e6;
  --color-background: #f2f4fe;
  --color-shadow: #8c8c8c;
  color: var(--color-text);
  background: var(--color-background);
  cursor: pointer;
  padding: 1em;
  border-radius: 6px;
  text-transform: capitalize;
  box-shadow: -2px 3px var(--color-shadow), -2px 1px var(--color-shadow);
  transform: translate(5px, -5px);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
  &:active {
    box-shadow: 0 0 var(--color-shadow), 0 0 var(--color-shadow);
    transform: translateX(0);
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
        --color-text: var(--color-text-button-primary, white);
        --color-background: var(--color-background-button-primary, #ad1fea);
      `;
    }
    if (props.variant === 'secondary') {
      return css`
        --color-text: var(--color-text-button-primary, white);
        --color-background: var(--color-background-button-primary, #4661e6);
      `;
    }
    if (props.variant === 'tertiary') {
      return css`
        --color-text: var(--color-text-button-tertiary, white);
        --color-background: var(--color-text-button-tertiary, #373f68);
      `;
    }
    if (props.variant === 'error') {
      return css`
        --color-text: var(--color-text-button-error, white);
        --color-background: var(--color-text-button-error, red);
      `;
    }
    if (props.variant === 'success') {
      return css`
        --color-text: var(--color-text-button-success, white);
        --color-background: var(--color-text-button-success, green);
      `;
    }
    return css`
      --color-text: var(--color-text-button-default, #4661e6);
      --color-background: var(--color-text-button-default, #f2f4fe);
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
