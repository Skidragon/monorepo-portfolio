import styled from 'styled-components';
import Image from 'next/image';
import { Footer, Navbar, ShopCategories } from '@sd/audiophile/feature';
import { Button } from '@sd/audiophile/ui';
import { CategoriesQuery, HomeQuery } from '@sd/audiophile/types';
import axios from 'axios';
import Link from 'next/link';
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
export async function getStaticProps() {
  const { data: homeData } = await axios.get<HomeQuery>(
    `${process.env.API_URL}/home`
  );
  const { data: categoriesData } = await axios.get<CategoriesQuery>(
    `${process.env.API_URL}/categories`
  );
  return {
    props: {
      home: homeData.homes[0],
      categories: categoriesData.categories,
    },
  };
}
interface HomePageProps {
  home: HomeQuery['homes'][0];
  categories: CategoriesQuery['categories'];
}
export function Index(props: HomePageProps) {
  const { hero } = props.home;
  console.log(props.home);
  return (
    <StyledPage>
      <Navbar categories={props.categories} />
      <Hero>
        <HeroImage>
          <Image src={hero.image.url} alt="" layout="fill" objectFit="cover" />
        </HeroImage>
        <HeroContent>
          <NewProductText>New Product</NewProductText>
          <NewProductNameText>{hero.product.name}</NewProductNameText>
          <NewProductDescription>{hero.description}</NewProductDescription>
          <Link href={`/product/${hero.product.id}`} passHref>
            <a>
              <Button>See Product</Button>
            </a>
          </Link>
        </HeroContent>
      </Hero>
      <main>
        <ShopCategoriesSection>
          <ShopCategories data={props.categories} />
        </ShopCategoriesSection>
      </main>
      <Footer categories={props.categories} />
    </StyledPage>
  );
}

export default Index;
