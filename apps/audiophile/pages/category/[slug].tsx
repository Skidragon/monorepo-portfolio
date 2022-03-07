import styled from 'styled-components';
import axios from 'axios';
import {
  ProductsByCategorySlugQuery,
  CategoriesQuery,
} from '@sd/audiophile/types';
import { GetStaticPropsContext, GetStaticPaths, GetStaticProps } from 'next';
import { Footer, Navbar } from '@sd/audiophile/feature';
import { SeeProductCard, Banner } from '@sd/audiophile/ui';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface ProductsByCategoryProps {
  products: ProductsByCategorySlugQuery['categories'][0]['products'];
  categories: CategoriesQuery['categories'];
  categoryName: string;
}

const StyledCategory = styled.div``;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get<CategoriesQuery>(
    `${process.env.API_URL}/categories`
  );
  return {
    paths: data.categories.map((category) => {
      return {
        params: {
          slug: category.slug,
        },
      };
    }),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext<any>
) => {
  const { data: categoriesData } = await axios.get<CategoriesQuery>(
    `${process.env.API_URL}/categories`
  );
  const { data: productsData } = await axios.get<ProductsByCategorySlugQuery>(
    `${process.env.API_URL}/products/category/slug/${ctx.params.slug}`
  );
  return {
    props: {
      products: productsData.categories[0].products,
      categories: categoriesData.categories,
      categoryName: productsData.categories[0].name,
    },
  };
};
const SeeProductsSection = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
export function ProductsByCategory(props: ProductsByCategoryProps) {
  return (
    <StyledCategory>
      <Navbar categories={props.categories} />
      <Banner>{props.categoryName}</Banner>
      <SeeProductsSection>
        {props.products.map((product, i) => {
          return (
            <SeeProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              src={product.image.url}
              href={`/product/${product.slug}`}
              reverse={i % 2 === 0}
            />
          );
        })}
      </SeeProductsSection>
      <Footer categories={props.categories} />
    </StyledCategory>
  );
}

export default ProductsByCategory;
