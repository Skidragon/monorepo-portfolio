import styled from 'styled-components';
import { ShopCategoryCard } from '@sd/audiophile/ui';

/* eslint-disable-next-line */
export interface MobileMenuProps {
  open: boolean;
}

const StyledMobileMenu = styled.div<MobileMenuProps>`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-flow: column;
  align-items: center;
  position: absolute;
  z-index: 1;
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
`;

const MenuList = styled.ul``;
const MenuItem = styled.li``;
export function MobileMenu(props: MobileMenuProps) {
  return (
    <StyledMobileMenu {...props}>
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
    </StyledMobileMenu>
  );
}

export default MobileMenu;
