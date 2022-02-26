import styled, { css } from 'styled-components';
import React from 'react';
import Link from 'next/link';
/* eslint-disable-next-line */
export interface LinkButtonProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  variant: 'primary' | 'secondary';
}

const StyledLinkButton = styled.a<LinkButtonProps>`
  ${(props) => {
    if (props.variant === 'primary') {
      return css`
        display: inline-flex;
        text-decoration: none;
        align-items: center;
        background: var(--dark-blue);
        color: white;
        text-transform: uppercase;
        & > * {
          padding: 1em;
        }
        &:hover > * {
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

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ variant = 'primary', href = '#', ...props }: LinkButtonProps, ref) => {
    console.log(variant);
    return (
      <Link href={href} passHref>
        <StyledLinkButton variant={variant} {...props} ref={ref}>
          {props.children}
        </StyledLinkButton>
      </Link>
    );
  }
);

export default LinkButton;
