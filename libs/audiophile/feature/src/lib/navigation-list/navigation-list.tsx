import { CategoriesQuery } from '@sd/audiophile/types';
import { ActiveLink } from '@sd/shared/ui';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavigationListProps {
  categories: CategoriesQuery['categories'];
}

const NavList = styled.ul``;
const NavItem = styled.li``;
export function NavigationList(props: NavigationListProps) {
  return (
    <NavList {...props}>
      <NavItem>
        <ActiveLink href={`/`} activeColor="orange">
          Home
        </ActiveLink>
      </NavItem>
      {props.categories.map((category) => {
        return (
          <NavItem key={category.id}>
            <ActiveLink
              href={`/category/${category.slug}`}
              activeColor="orange"
            >
              {category.name}
            </ActiveLink>
          </NavItem>
        );
      })}
    </NavList>
  );
}

export default NavigationList;
