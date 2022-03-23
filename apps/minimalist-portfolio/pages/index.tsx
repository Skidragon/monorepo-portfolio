import styled from 'styled-components';
import Image from 'next/image';
import { LinkButton, DownloadLinkButton } from '@sd/minimalist-portfolio/ui';
import {
  Footer,
  NavigationBar,
  InterestedToContactMeSection,
} from '@sd/minimalist-portfolio/feature';
const StyledPage = styled.div``;

const IntroSection = styled.section``;
const AboutMeSection = styled.section``;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <NavigationBar />
      <IntroSection>
        <Image
          height="386"
          width="1584"
          src="/image-homepage-hero.png"
          alt=""
        />
        <h1
          style={{
            marginBottom: 0,
          }}
        >
          Hey, I’m Simon Davis and I love building beautiful websites.
        </h1>
        <DownloadLinkButton
          variant="primary"
          href="/simon-davis-resume.pdf"
          download={'simon-davis-resume'}
        >
          Download Résumé
        </DownloadLinkButton>
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
        <LinkButton variant="secondary" href="/portfolio-index">
          Go To Portfolio
        </LinkButton>
      </AboutMeSection>
      <InterestedToContactMeSection />
      <Footer />
    </StyledPage>
  );
}

export default Index;
