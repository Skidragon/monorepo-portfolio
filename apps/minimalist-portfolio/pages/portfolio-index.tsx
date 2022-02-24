import styled from 'styled-components';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface PortfolioIndexProps {}

const StyledPortfolioIndex = styled.div`
  color: pink;
`;
const ProjectCard = styled.div``;

export function PortfolioIndex(props: PortfolioIndexProps) {
  return (
    <StyledPortfolioIndex>
      <section>
        <ProjectCard>
          <h2>Bookmark</h2>
          <p>
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </p>
          <a href="#">View Project</a>
        </ProjectCard>
      </section>
    </StyledPortfolioIndex>
  );
}

export default PortfolioIndex;
