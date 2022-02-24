import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;
const Header = styled.header``;
const Logo = styled.div``;
const Hamburger = styled.button``;
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
        <Logo></Logo>
        <Hamburger></Hamburger>
      </Header>
      <IntroSection>
        <h1>Hey, I’m Simon Davis and I love building beautiful websites</h1>
        <a href="#">About Me</a>
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
