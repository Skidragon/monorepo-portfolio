import styled from 'styled-components';
import { Box, Button } from '@sd/product-feedback-ui-components';
import Image from 'next/image';
const StyledPage = styled.div`
  background: #262835;
  height: 100vh;
  position: relative;
`;
const HeroImage = styled(Image)`
  filter: brightness(80%);
`;
const MainContentContainer = styled(Box)`
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  & > * + * {
    margin-top: var(--flow, 0.75rem);
  }
`;
const Title = styled.h1`
  background-image: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  font-size: 3rem;
  background-clip: text;
  color: transparent;
`;
const CTAText = styled.p`
  font-size: 1.75rem;
  color: var(--color-primary);
`;
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <HeroImage src="/hero.jpg" layout="fill" alt={''} />
      <MainContentContainer>
        <Title>Product Feedback</Title>
        <CTAText>Get Feedback from stockholders and potential users.</CTAText>
        <Button variant="primary">Get Started!</Button>
      </MainContentContainer>
    </StyledPage>
  );
}

export default Index;
