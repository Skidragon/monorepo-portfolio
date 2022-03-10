import { CategoriesQuery } from '@sd/audiophile/types';
import styled from 'styled-components';
import ShopCategories from '../shop-categories/shop-categories';

/* eslint-disable-next-line */
export interface MobileMenuProps {
  categories: CategoriesQuery['categories'];
  open: boolean;
}

const StyledMobileMenu = styled.div<MobileMenuProps>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-flow: column;
  align-items: center;
  position: absolute;
  z-index: var(--shop-categories-menu-z-index);
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(100%);
  padding: 2em;
  background: white;
  overflow: auto;
  max-height: 85vh;
  & > * + * {
    margin-top: 1.5rem;
  }
  @media screen and (min-width: 70em) {
    display: none;
  }
`;

const MenuList = styled.ul``;
const MenuItem = styled.li``;
export function MobileMenu(props: MobileMenuProps) {
  return (
    <StyledMobileMenu {...props}>
      <ShopCategories data={props.categories} />
    </StyledMobileMenu>
  );
}

export default MobileMenu;
