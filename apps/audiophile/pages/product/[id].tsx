import styled from 'styled-components';
import axios from 'axios';
import {
  ProductByIdQuery,
  CategoriesQuery,
  ProductsQuery,
} from '@sd/audiophile/types';
import { GetStaticPropsContext, GetStaticPaths, GetStaticProps } from 'next';
import { Footer, Navbar } from '@sd/audiophile/feature';
import { AddProductCard } from '@sd/audiophile/ui';

/* eslint-disable-next-line */
export interface ProductPageProps {
  product: ProductByIdQuery['product'];
  categories: CategoriesQuery['categories'];
  categoryName: string;
}

const StyledProductPage = styled.div`
  display: flex;
  flex-flow: column;
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get<ProductsQuery>(
    `${process.env.API_URL}/products`
  );
  return {
    paths: data.products.map((product) => {
      return {
        params: {
          id: product.id,
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
  const { data: productData } = await axios.get<ProductByIdQuery>(
    `${process.env.API_URL}/product/id/${ctx.params.id}`
  );
  return {
    props: {
      categories: categoriesData.categories,
      product: productData.product,
    },
  };
};
const AddProductSection = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const FeaturesSection = styled.section``;
const InTheBoxSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const ItemsList = styled.ul`
  display: flex;
  flex-flow: column;
`;
export function ProductPage(props: ProductPageProps) {
  const { product, categories } = props;
  return (
    <StyledProductPage>
      <Navbar categories={categories} />
      <main>
        <AddProductSection>
          <AddProductCard
            name={product.name}
            cents={product.cents}
            description={product.description}
            src={product.image.url}
          />
        </AddProductSection>
        <FeaturesSection>
          <h2>Features</h2>
          <p>{product.description_long}</p>
        </FeaturesSection>
        {product.productItems.length ? (
          <InTheBoxSection>
            <h2>In The Box</h2>
            <ItemsList>
              {product.productItems.map((item) => {
                return (
                  <li key={item.item.name}>
                    {`${item.quantity}x`} {item.item.name}
                  </li>
                );
              })}
            </ItemsList>
          </InTheBoxSection>
        ) : null}
      </main>
      <Footer categories={categories} />
    </StyledProductPage>
  );
}

export default ProductPage;
