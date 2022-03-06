import styled from 'styled-components';
import { ShopCategoryCard } from '@sd/audiophile/ui';

/* eslint-disable-next-line */
interface Category {
  category: string;
  src: string;
}
export interface ShopCategoriesProps {
  data: Category[];
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
        <MenuItem>
          <ShopCategoryCard category="Speakers" src="/test.png" />
        </MenuItem>
        <MenuItem>
          <ShopCategoryCard category="Headphones" src="/test.png" />
        </MenuItem>
        <MenuItem>
          <ShopCategoryCard category="Earphones" src="/test.png" />
        </MenuItem>
      </MenuList>
    </StyledShopCategories>
  );
}

export default ShopCategories;
