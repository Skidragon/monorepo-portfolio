import styled from 'styled-components';
import { Navbar, ShopCategories } from '@sd/audiophile/feature';
import { CategoriesQuery } from '@sd/audiophile/types';
import axios from 'axios';
const StyledPage = styled.div`
  .page {
  }
  background: white;
`;

export async function getStaticProps() {
  const { data } = await axios.get<CategoriesQuery>(
    `${process.env.API_URL}/categories`
  );
  return {
    props: {
      categories: data.categories,
    },
  };
}
export function Index(props: CategoriesQuery) {
  return (
    <StyledPage>
      <Navbar categories={props.categories} />
      <main>
        <h2>404</h2>
        <p>You hear that? Nope, there is no audio here.</p>
        <ShopCategories data={props.categories} />
      </main>
    </StyledPage>
  );
}

export default Index;
