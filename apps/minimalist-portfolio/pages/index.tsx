import styled from 'styled-components';
import Image from 'next/image';
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
  background: #172935;
`;
const LinkButton = styled.a`
  display: inline-flex;
  text-decoration: none;
  align-items: center;
  background: #203a4c;
  color: white;
  text-transform: uppercase;
  & > * {
    padding: 1em;
  }
  &:hover {
    background: #5fb4a2;
  }
`;
const IntroSection = styled.section``;
const AboutMeSection = styled.section``;
const ContactMeSection = styled.section``;
const Footer = styled.footer``;
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
        <Hamburger>
          <Image height="32" width="61" src="/hamburger.svg" alt="" />
        </Hamburger>
      </Header>
      <IntroSection>
        <h1>Hey, I’m Simon Davis and I love building beautiful websites</h1>
        <LinkButton href="#">
          <DownArrows>
            <Image height="14" width="16" src="/down-arrows.svg" alt="" />
          </DownArrows>
          <div>About Me</div>
        </LinkButton>
      </IntroSection>
      <AboutMeSection>
        <h2>About Me</h2>
        <p>
          I’m a front-end developer with some back-end experience looking for a
          new role in an exciting company. I focus on writing accessible HTML,
          using modern CSS practices and writing clean JavaScript using state
          machines for handling complex state. When writing JavaScript code, I
          mostly use React with the Next.js framework, but I can adapt to
          whatever tools are required. I’m based in Georgia in the USA, but I’m
          happy working remotely and have had experience in a remote team. When
          I’m not coding, you’ll find me playing the piano, exercising, or
          reading. I’d love you to check out my work.
        </p>
        <a href="#">Go To Portfolio</a>
      </AboutMeSection>
      <ContactMeSection>
        <h2>Interested in doing a project together?</h2>
        <a href="#">Contact Me</a>
      </ContactMeSection>
      <Footer>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </Footer>
    </StyledPage>
  );
}

export default Index;
