import styled from 'styled-components';

const StyledPage = styled.div`
  background: #202733;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Card = styled.div`
  background: #313a48;
  border-radius: 15px;
  padding: 5em;
`;
const AdviceHeading = styled.h1`
  color: #53ffaa;
`;
const Advice = styled.p`
  color: #cee3e9;
  font-size: 2.6rem;
`;
const Divider = styled.div`
  color: #4f5d74;
  color: #cee3e9;
`;
const PlayButton = styled.button`
  color: #202733;
  background: #53ffaa;
`;
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Card>
        <AdviceHeading>Advice #117</AdviceHeading>
        <Advice>
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </Advice>
      </Card>
    </StyledPage>
  );
}

export default Index;
