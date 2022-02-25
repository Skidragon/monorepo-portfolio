import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContactMeProps {}

const StyledContactMe = styled.div`
  color: pink;
`;
const GetInTouchSection = styled.section``;
const ContactMeSection = styled.section``;
const ContactMeForm = styled.form``;
const TextField = styled.div``;
const Label = styled.label``;
const Input = styled.input``;
export function ContactMe(props: ContactMeProps) {
  return (
    <StyledContactMe>
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
      </GetInTouchSection>
      <ContactMeSection>
        <ContactMeForm>
          <TextField>
            <Label></Label>
            <Input type="text" />
          </TextField>
          <button type="submit">Send Message</button>
        </ContactMeForm>
      </ContactMeSection>
    </StyledContactMe>
  );
}

export default ContactMe;
