import styled from 'styled-components';
import Link from 'next/link';

import { Logo, SocialMediaLinks } from '../..';
import { LinkTo } from '@sd/minimalist-portfolio/ui';

/* eslint-disable-next-line */
export interface FooterProps {}
const StyledFooter = styled.footer`
  background: var(--grayish-dark-blue);
`;
const Content = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 4em 2em;
  max-width: 160ch;
  margin: 0 auto;
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
    margin-right: auto;
    & > li + li {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
  & a {
    &:visited {
      color: white;
    }
  }
`;

const StyledLinkTo = styled(LinkTo)``;
export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <Content>
        <LinkTo href="/">
          <Logo fill="white" />
        </LinkTo>
        <NavList>
          <li>
            <StyledLinkTo href="/">Home</StyledLinkTo>
          </li>
          <li>
            <StyledLinkTo href="/portfolio-index">Portfolio</StyledLinkTo>
          </li>
          <li>
            <StyledLinkTo href="/contact-me">Contact Me</StyledLinkTo>
          </li>
        </NavList>
        <SocialMediaLinks fill="white" />
      </Content>
    </StyledFooter>
  );
}

export default Footer;
