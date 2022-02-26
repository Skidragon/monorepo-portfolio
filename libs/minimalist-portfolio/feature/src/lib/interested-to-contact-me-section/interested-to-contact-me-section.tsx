import { LinkButton } from '@sd/minimalist-portfolio/ui';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface InterestedToContactMeSectionProps {}

const ContactMeSection = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 30em) {
    display: flex;
    flex-flow: row;
    align-items: center;
    & > *:last-child {
      margin: 0;
      margin-left: auto;
    }
  }
`;
const Interested = styled.h2`
  max-width: 17rem;
  margin-bottom: 0;
`;
export function InterestedToContactMeSection(
  props: InterestedToContactMeSectionProps
) {
  return (
    <ContactMeSection>
      <Interested>Interested in doing a project together?</Interested>
      <LinkButton variant="secondary" href="/contact-me">
        Contact Me
      </LinkButton>
    </ContactMeSection>
  );
}

export default InterestedToContactMeSection;
