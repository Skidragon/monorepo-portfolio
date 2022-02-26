import {
  Footer,
  NavigationBar,
  SocialMediaLinks,
} from '@sd/minimalist-portfolio/feature';
import { TextField, Button, TextArea } from '@sd/minimalist-portfolio/ui';
import styled from 'styled-components';
/* eslint-disable-next-line */
export interface ContactMeProps {}
const StyledContactMe = styled.div``;
const GetInTouchSection = styled.section`
  & > * + * {
    margin-top: 1.5rem;
  }
`;
const ContactMeSection = styled.section``;
const ContactMeForm = styled.form`
  & > * + * {
    margin-top: 1.5rem;
  }
`;

export function ContactMe(props: ContactMeProps) {
  return (
    <StyledContactMe>
      <NavigationBar />
      <GetInTouchSection>
        <h2>Get In Touch</h2>
        <p>
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          that is remote-based. But I’m also happy to hear about opportunites
          that don’t fit that description. Please do feel free to check out my
          online profiles below and get in touch using the form.
        </p>
        <SocialMediaLinks />
      </GetInTouchSection>
      <ContactMeSection>
        <h2>Contact Me</h2>
        <ContactMeForm
          action="https://getform.io/f/522c6d08-8834-4289-905c-c10bedb4476c"
          method="POST"
        >
          {/* name, email message */}
          <TextField
            label="Name"
            id="name"
            placeholder="Jane Appleseed"
            isRequired
            maxLength={100}
          />
          <TextField
            label="Email Address"
            id="email"
            type="email"
            placeholder="email@example.com"
            isRequired
            maxLength={100}
          />
          <TextArea
            label="Message"
            id="message"
            name={'message'}
            placeholder="How can I help?"
            isRequired
            rows={5}
            maxLength={500}
          />
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </ContactMeForm>
      </ContactMeSection>
      <Footer />
    </StyledContactMe>
  );
}

export default ContactMe;
