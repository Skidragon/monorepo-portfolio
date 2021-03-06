import styled from 'styled-components';
import Image from 'next/image';
import { MobileMenu } from '../..';
import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import { LinkTo } from '@sd/minimalist-portfolio/ui';
/* eslint-disable-next-line */
export interface NavigationBarProps {}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  max-width: 80ch;
  margin: 0 auto;
`;
const NavList = styled.ul`
  display: none;
  justify-content: space-between;
  margin-left: auto;
  & > li + li {
    margin-left: 2rem;
  }
  @media screen and (min-width: 40em) {
    display: flex;
  }
`;

const Logo = styled.div``;
const StyledLink = styled.a<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? 'var(--cyan)' : 'black')};
`;
function ActiveLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href} passHref>
      <StyledLink onClick={handleClick} isActive={router.asPath === href}>
        {children}
      </StyledLink>
    </Link>
  );
}

export function NavigationBar(props: NavigationBarProps) {
  return (
    <Header>
      <LinkTo href="/">
        <Logo>
          <Image height="32" width="61" src="/logo.svg" alt="" />
        </Logo>
      </LinkTo>
      <NavList>
        <li>
          <ActiveLink href="/">Home</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/portfolio-index">Portfolio</ActiveLink>
        </li>
        <li>
          <ActiveLink href="/contact-me">Contact Me</ActiveLink>
        </li>
      </NavList>
      <MobileMenu />
    </Header>
  );
}

export default NavigationBar;
