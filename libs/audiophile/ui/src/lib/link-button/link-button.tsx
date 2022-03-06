import styled, { css } from 'styled-components';
import Link, { LinkProps } from 'next/link';
/* eslint-disable-next-line */
export interface LinkButtonProps extends LinkProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: string;
}

const StyledLinkButton = styled.a<LinkButtonProps>`
  display: inline-block;
  padding: 1em 2em;
  position: relative;
  cursor: pointer;
  text-align: center;
  transition: all 250ms;
  font-weight: $fw-700;
  text-transform: uppercase;

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
    return css``;
  }};
`;
export const LinkButton = ({
  variant = 'primary',
  children,
  ...props
}: LinkButtonProps) => {
  return (
    <Link {...props} passHref>
      <StyledLinkButton href={'replace'} variant={variant}>
        {children}
      </StyledLinkButton>
    </Link>
  );
};

export default LinkButton;
