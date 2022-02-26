import styled from 'styled-components';
import Link from 'next/link';

import { Logo, SocialMediaLinks } from '../..';
import { LinkTo } from '@sd/minimalist-portfolio/ui';

/* eslint-disable-next-line */
export interface FooterProps {}
const StyledFooter = styled.footer`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 4em 2em;
  background: var(--grayish-dark-blue);
  color: white;
  & > * + * {
    margin-top: 2rem;
  }
  @media screen and (min-width: 40em) {
    flex-flow: row;
    align-items: baseline;
    padding: 2em;
    & > * + * {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;
const NavList = styled.ul`
  display: flex;
  flex-flow: column;
  align-items: center;
  & > li + li {
    margin-top: 2rem;
  }
  @media screen and (min-width: 40em) {
    flex-flow: row;
    align-items: flex-end;
    & > li + li {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;

export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <LinkTo href="/">
        <Logo fill="white" />
      </LinkTo>
      <NavList>
        <li>
          <LinkTo href="/">Home</LinkTo>
        </li>
        <li>
          <LinkTo href="/portfolio-index">Portfolio</LinkTo>
        </li>
        <li>
          <LinkTo href="/contact-me">Contact Me</LinkTo>
        </li>
      </NavList>
      <SocialMediaLinks fill="white" />
    </StyledFooter>
  );
}

export default Footer;
