import styled from 'styled-components';
import { LinkButton } from '@sd/minimalist-portfolio/ui';
import {
  Footer,
  InterestedToContactMeSection,
  NavigationBar,
} from '@sd/minimalist-portfolio/feature';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface PortfolioIndexProps {}

const StyledPortfolioIndex = styled.div`
  & section > * + * {
    margin-top: 4rem;
  }
`;
const ProjectCard = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`;

export function PortfolioIndex(props: PortfolioIndexProps) {
  return (
    <StyledPortfolioIndex>
      <NavigationBar />

      <section>
        <ProjectCard>
          <Image
            height="556"
            width="1508"
            src="/typemaster-keyboard.png"
            alt=""
          />
          <h2>Typemaster Landing Page</h2>
          <p>
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5 while making sure the site was
            accessible and SCSS with flexbox to make it responsive. Snowpack is
            used to create a production build.
          </p>
          <LinkButton
            variant="secondary"
            href="https://sd-typemaster-prelaunch-page.vercel.app/"
          >
            View Project
          </LinkButton>
        </ProjectCard>
        <ProjectCard>
          <Image height="746" width="1070" src="/loopstudios.png" alt="" />
          <h2>Loopstudios Landing Page</h2>
          <p>
            CSS Grid was used to make most of the site responsive. Next.js to
            make the navigation bar animation run when scrolled past a certain
            point using observers and closing the mobile navigation bar using
            the escape key.
          </p>
          <LinkButton
            variant="secondary"
            href="https://loopstudio-nu.vercel.app/"
          >
            View Project
          </LinkButton>
        </ProjectCard>
        <ProjectCard>
          <Image height="745" width="1093" src="/advice-gen.png" alt="" />
          <h2>Advice Generator</h2>
          <p>
            This project was made as a challenge based on a design file and is
            part of a monorepo (NX). I used HTML5, along with Styled Components
            (styling), and React Query paired with Axios for Data Fetching.
          </p>
          <LinkButton
            variant="secondary"
            href="https://advice-generator-ashen.vercel.app/"
          >
            View Project
          </LinkButton>
        </ProjectCard>
        <ProjectCard>
          <h2>Tower of Hanoi</h2>
          <p>
            Xstate was used to control state which simplified making the game
            compared to the out of the box state management given by React. Used
            Typescript to document the code.
          </p>
          <LinkButton
            variant="secondary"
            href="https://codesandbox.io/s/tower-of-hanoi-gmzuk"
          >
            View Project
          </LinkButton>
        </ProjectCard>
        <ProjectCard>
          <h2>Audiophile</h2>
          <p>
            Graphql CMS is used to store images of the products and the
            information about them. Next.js was able to build the pages. Used
            Codegen to create query code to get the products.
          </p>
          <LinkButton
            variant="secondary"
            href="https://sd-audiophile.vercel.app/"
          >
            View Project
          </LinkButton>
        </ProjectCard>
        <ProjectCard>
          <h2>Minimalist Portfolio</h2>
          <p>Using Next.js, NX, Styled components, and GetForms.</p>
          <LinkButton variant="secondary" href="/">
            View Project
          </LinkButton>
        </ProjectCard>
      </section>
      <InterestedToContactMeSection />

      <Footer />
    </StyledPortfolioIndex>
  );
}

export default PortfolioIndex;
