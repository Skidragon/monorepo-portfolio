import styled from 'styled-components';
import Image from 'next/image';
import { MobileMenu } from '../..';
import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
/* eslint-disable-next-line */
export interface NavigationBarProps {}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1em;
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
    <Link href={href}>
      <StyledLink onClick={handleClick} isActive={router.asPath === href}>
        {children}
      </StyledLink>
    </Link>
  );
}

export function NavigationBar(props: NavigationBarProps) {
  return (
    <Header>
      <Link href="/">
        <a>
          <Logo>
            <Image height="32" width="61" src="/logo.svg" alt="" />
          </Logo>
        </a>
      </Link>
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
