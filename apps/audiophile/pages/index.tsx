import styled from 'styled-components';
import Image from 'next/image';
import { Navbar } from '@sd/audiophile/feature';

const StyledPage = styled.div`
  .page {
  }
  background: #1c1c1c;
`;

const Hero = styled.div`
  height: 100vh;
  width: 100%;
`;

export function Index() {
  return (
    <StyledPage>
      <Navbar />
      <Hero>
        <Image
          src="/image-hero.jpg"
          width={1440}
          height={729}
          alt=""
          layout="responsive"
        />
      </Hero>
    </StyledPage>
  );
}

export default Index;
