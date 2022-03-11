import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link, { LinkProps } from 'next/link';
import React from 'react';
/* eslint-disable-next-line */
export interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
  activeColor: string;
}

const StyledLink = styled.a<{ isActive: boolean; activeColor: string }>`
  color: ${(props) => (props.isActive ? props.activeColor : 'white')};
`;
export const ActiveLink = React.forwardRef<HTMLAnchorElement, ActiveLinkProps>(
  ({ children, activeColor = 'orange', ...props }, ref) => {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      router.push(props.href);
    };

    return (
      <Link href={props.href} passHref>
        <StyledLink
          onClick={handleClick}
          isActive={router.asPath === props.href}
          activeColor={activeColor}
          ref={ref}
        >
          {children}
        </StyledLink>
      </Link>
    );
  }
);

export default ActiveLink;
