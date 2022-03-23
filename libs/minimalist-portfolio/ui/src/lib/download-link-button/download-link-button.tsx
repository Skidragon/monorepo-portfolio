import styled, { css } from 'styled-components';
import React from 'react';
/* eslint-disable-next-line */
export interface DownloadLinkButtonProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  variant: 'primary' | 'secondary';
}

const StyledLinkButton = styled.a<DownloadLinkButtonProps>`
  display: inline-flex;
  &:hover > *,
  &:focus > * {
    background: #5fb4a2;
    stroke: white;
  }
`;
const StyledTextSide = styled.div`
  text-decoration: none;
  align-items: center;
  background: var(--dark-blue);
  color: white;
  text-transform: uppercase;
  padding: 1em;
`;
const DownArrows = styled.div`
  background: var(--dark-blue);
  filter: brightness(80%);
  padding: 1em;
`;
export const DownloadLinkButton = React.forwardRef<
  HTMLAnchorElement,
  DownloadLinkButtonProps
>(
  (
    { variant = 'primary', href = '#', ...props }: DownloadLinkButtonProps,
    ref
  ) => {
    return (
      <StyledLinkButton href={href} variant={variant} {...props} ref={ref}>
        <StyledTextSide>{props.children}</StyledTextSide>
        <DownArrows>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
            <g fill="none" fillRule="evenodd" stroke="#5FB4A2">
              <path d="M0 9l8 4 8-4" />
              <path opacity=".5" d="M0 5l8 4 8-4" />
              <path opacity=".25" d="M0 1l8 4 8-4" />
            </g>
          </svg>
        </DownArrows>
      </StyledLinkButton>
    );
  }
);

export default DownloadLinkButton;
