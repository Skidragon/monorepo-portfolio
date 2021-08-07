import styled from 'styled-components';
import { Box, Button } from '@sd/product-feedback-ui-components';
import Image from 'next/image';
import Link from 'next/link';
import { Stack } from '@sd/react-layout-styled-components';
const StyledPage = styled.div`
  height: 100vh;
  position: relative;
`;
const ImageWrapper = styled.div`
  filter: brightness(80%);
  height: 100vh;
  width: 100%;
`;
const HeroImage = styled(Image)``;
const MainContentContainer = styled(Box)`
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
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
const LinkButton = styled(Button)``;
export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <ImageWrapper>
        <HeroImage
          src="/hero.jpg"
          layout="fill"
          alt={''}
          placeholder={'blur'}
          blurDataURL={'L3SPX~Dt%Q.600Vz^-Nt00r{?cI;'}
        />
      </ImageWrapper>
      <MainContentContainer>
        <Stack>
          <Title>Product Feedback</Title>
          <CTAText>Get Feedback from stockholders and potential users.</CTAText>
          <Link href={'/products-gallery'} passHref={true}>
            <LinkButton variant="primary">Get Started!</LinkButton>
          </Link>
        </Stack>
      </MainContentContainer>
    </StyledPage>
  );
}

export default Index;
