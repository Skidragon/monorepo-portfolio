import styled from 'styled-components';
import { LinkButton } from '@sd/minimalist-portfolio/ui';
import {
  Footer,
  InterestedToContactMeSection,
  NavigationBar,
} from '@sd/minimalist-portfolio/feature';
import Image from 'next/image';
import { useState } from 'react';
import { InView, useInView } from 'react-intersection-observer';
import { projects } from '@sd/minimalist-portfolio/utils';

/* eslint-disable-next-line */
export interface PortfolioIndexProps {}
const Emoji = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 1rem;
  pointer-events: none;
  font-size: 1.2rem;
  pointer-events: none;
`;
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

const ProjectTitle = styled.h2<{ animate: boolean }>`
  position: relative;
  display: inline-block;
  margin-bottom: 0;
`;
const ProjectButtonsGroup = styled.div`
  display: flex;
  & > * + * {
    margin-left: 1rem;
  }
`;
type Project = {
  height: number;
  width: number;
  src: string;
  title: string;
  description: string;
  emoji: string;
  links: {
    site: string;
    code: string;
  };
};

export function PortfolioIndex(props: PortfolioIndexProps) {
  const [project, setProject] = useState<Project | Record<string, never>>({});
  const [footerRef, footerInView] = useInView({
    threshold: 0.1,
  });
  return (
    <StyledPortfolioIndex>
      <NavigationBar />
      <section>
        {projects.map((project) => {
          return (
            <InView
              threshold={0.75}
              key={project.title}
              onChange={(inView) => {
                if (inView) {
                  setProject(project);
                }
              }}
              as="div"
            >
              {({ ref, inView }) => {
                return (
                  <ProjectCard ref={ref}>
                    <Image
                      height={project.height}
                      width={project.width}
                      src={project.src}
                      alt=""
                      id={project.title.toLowerCase().replace(/\s/, '-')}
                    />
                    <ProjectTitle animate={inView}>
                      {project.title}
                    </ProjectTitle>
                    <p>{project.description}</p>
                    <ProjectButtonsGroup>
                      <LinkButton
                        target="_blank"
                        variant="primary"
                        href={project.links.site}
                      >
                        🌍 View Site
                      </LinkButton>
                      <LinkButton
                        target="_blank"
                        variant="secondary"
                        href={project.links.code}
                      >
                        🖥️ See Code
                      </LinkButton>
                    </ProjectButtonsGroup>
                  </ProjectCard>
                );
              }}
            </InView>
          );
        })}
        {!footerInView ? <Emoji>{project.emoji}</Emoji> : null}
        <ProjectCard>
          <h2>Minimalist Portfolio</h2>
          <p>
            You are currently on the site. It uses Next.js, NX, Styled
            components, and GetForms.
          </p>
        </ProjectCard>
      </section>
      <InterestedToContactMeSection />

      <Footer ref={footerRef} />
    </StyledPortfolioIndex>
  );
}

export default PortfolioIndex;
