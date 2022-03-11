import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

const Content = styled.div``;
const Form = styled.form``;
const Fieldset = styled.fieldset``;
const Legend = styled.legend``;
const SubmitButton = styled.button``;
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Content>
        <Form>
          <Fieldset>
            <Legend>Select Theme</Legend>
          </Fieldset>
          <Fieldset>
            <Legend>Number of Players</Legend>
          </Fieldset>
          <Fieldset>
            <Legend>Grid Size</Legend>
          </Fieldset>
          <SubmitButton type="submit">Start Game</SubmitButton>
        </Form>
      </Content>
    </StyledPage>
  );
}

export default Index;
