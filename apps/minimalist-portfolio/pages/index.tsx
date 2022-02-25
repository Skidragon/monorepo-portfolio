import styled from 'styled-components';
import Image from 'next/image';
import { LinkButton } from '@sd/minimalist-portfolio/ui';
import { MobileMenu } from '@sd/minimalist-portfolio/feature';
const StyledPage = styled.div`
  .page {
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;
const Logo = styled.div``;
const Hamburger = styled.button`
  all: unset;
  cursor: pointer;
`;
const DownArrows = styled.div`
  background: var(--dark-blue);
  filter: brightness(80%);
`;

const IntroSection = styled.section``;
const AboutMeSection = styled.section``;
const ContactMeSection = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 30em) {
    display: flex;
    flex-flow: row;
    align-items: baseline;
    & > *:last-child {
      margin-left: auto;
    }
  }
`;
const Interested = styled.h2`
  max-width: 17rem;
`;
const Footer = styled.footer`
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
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Header>
        <Logo>
          <Image height="32" width="61" src="/logo.svg" alt="" />
        </Logo>
        <MobileMenu />
      </Header>
      <IntroSection>
        <h1>Hey, I’m Simon Davis and I love building beautiful websites</h1>
        <LinkButton variant="primary" href="#">
          <DownArrows>
            <Image height="14" width="16" src="/down-arrows.svg" alt="" />
          </DownArrows>
          <div>About Me</div>
        </LinkButton>
      </IntroSection>
      <AboutMeSection>
        <h2>About Me</h2>
        <p>
          I’m a front-end developer with some back-end knowledge looking for a
          new role in an exciting company. I focus on writing accessible HTML,
          using modern CSS practices and writing clean JavaScript using state
          machines for handling complex state. When writing JavaScript code, I
          mostly use React with the Next.js framework, but I can adapt to
          whatever tools are required. I’m based in Georgia in the USA, but I’m
          happy working remotely and have had experience in a remote team. When
          I’m not coding, you’ll find me playing the piano, exercising, or
          reading. I’d love you to check out my work.
        </p>
        <LinkButton variant="secondary" href="#">
          Go To Portfolio
        </LinkButton>
      </AboutMeSection>
      <ContactMeSection>
        <Interested>Interested in doing a project together?</Interested>
        <LinkButton variant="secondary" href="#">
          Contact Me
        </LinkButton>
      </ContactMeSection>
      <Footer>
        <div style={{ background: 'white' }}>
          <Image height="32" width="61" src="/logo.svg" alt="" />
        </div>
        <NavList>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
        </NavList>
        <SocialList>
          <li>
            <Image width="25" height="25" src="/github.svg" alt="" />
          </li>
          <li>
            <Image width="25" height="25" src="/linkedin.svg" alt="" />
          </li>
          <li>
            <Image width="25" height="25" src="/twitter.svg" alt="" />
          </li>
        </SocialList>
      </Footer>
    </StyledPage>
  );
}

export default Index;
