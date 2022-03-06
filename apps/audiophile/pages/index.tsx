import styled from 'styled-components';
import Image from 'next/image';
import { Footer, Navbar, ShopCategories } from '@sd/audiophile/feature';
import { Button } from '@sd/audiophile/ui';

const StyledPage = styled.div`
  .page {
  }
  background: white;
`;

const Hero = styled.section`
  width: 100%;
  height: 80vh;
  position: relative;
`;
const HeroImage = styled.div`
  height: 100%;
  position: relative;
`;
const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 50ch;
  & > * + * {
    margin-top: 1.5rem;
  }
`;
const NewProductText = styled.h1`
  text-transform: uppercase;
  color: grey;
  font-size: 1rem;
  letter-spacing: 0.5rem;
`;
const NewProductNameText = styled.h2`
  color: white;
`;
const NewProductDescription = styled.p`
  color: white;
`;
const ShopCategoriesSection = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
export function Index() {
  return (
    <StyledPage>
      <Navbar />
      <Hero>
        <HeroImage>
          <Image src="/image-hero.jpg" alt="" layout="fill" objectFit="cover" />
        </HeroImage>
        <HeroContent>
          <NewProductText>New Product</NewProductText>
          <NewProductNameText>XX99 Mark II Headphone</NewProductNameText>
          <NewProductDescription>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </NewProductDescription>
          <Button>See Product</Button>
        </HeroContent>
      </Hero>
      <ShopCategoriesSection>
        <ShopCategories data={[]} />
      </ShopCategoriesSection>
      <Footer />
    </StyledPage>
  );
}

export default Index;
