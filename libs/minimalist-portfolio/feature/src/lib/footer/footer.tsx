import styled from 'styled-components';
import Image from 'next/image';

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
const SocialList = styled.ul`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: white;
  stroke: white;
  background: white;
  & > li + li {
    margin-left: 1rem;
  }
  @media screen and (min-width: 40em) {
    margin-left: auto;
  }
`;
export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <div style={{ background: 'white' }}>
        <Image height="32" width="61" src="/logo.svg" alt="" />
      </div>
      <NavList>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/portfolio-index">Portfolio</a>
        </li>
        <li>
          <a href="/contact-me">Contact Me</a>
        </li>
      </NavList>
      <SocialList>
        <li>
          <a href="https://github.com/Skidragon">
            <Image width="25" height="25" src="/github.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/simon-k-davis/">
            <Image width="25" height="25" src="/linkedin.svg" alt="" />
          </a>
        </li>
      </SocialList>
    </StyledFooter>
  );
}

export default Footer;