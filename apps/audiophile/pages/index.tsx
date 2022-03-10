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
  const { data: categoriesData } = await axios.get<CategoriesQuery>(
    `${process.env.API_URL}/categories`
  );
  return {
    props: {
      categories: categoriesData.categories,
    },
  };
}
interface HomePageProps {
  categories: CategoriesQuery['categories'];
}
export function Index(props: HomePageProps) {
  return (
    <StyledPage>
      <Navbar categories={props.categories} />
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
