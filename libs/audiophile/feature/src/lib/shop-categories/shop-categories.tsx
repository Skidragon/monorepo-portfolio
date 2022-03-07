import styled from 'styled-components';
import { ShopCategoryCard } from '@sd/audiophile/ui';
import { CategoriesQuery } from '@sd/audiophile/types';

/* eslint-disable-next-line */

export interface ShopCategoriesProps {
  data: CategoriesQuery['categories'];
}

const StyledShopCategories = styled.div``;
const MenuList = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media screen and (min-width: 50em) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  }
`;
const MenuItem = styled.li``;
export function ShopCategories(props: ShopCategoriesProps) {
  return (
    <StyledShopCategories>
      <MenuList>
        {props.data.map((category) => {
          return (
            <MenuItem key={category.id}>
              <ShopCategoryCard
                name={category.name}
                src={category.image.url}
                slug={category.slug}
              />
            </MenuItem>
          );
        })}
      </MenuList>
    </StyledShopCategories>
  );
}

export default ShopCategories;
