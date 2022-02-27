import styled from 'styled-components';
import { ShopCategoryCard } from '@sd/audiophile/ui';
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import { useState } from 'react';
/* eslint-disable-next-line */
export interface MobileMenuProps {}

const StyledMobileMenu = styled.div``;
const Hamburger = styled.button``;
const Menu = styled.div`
  display: flex;
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
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  useClickAway(ref, () => {
    setOpen(false);
  });
  return (
    <StyledMobileMenu ref={ref}>
      <Hamburger onClick={() => setOpen((prevState) => !prevState)}>
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
          </g>
        </svg>
      </Hamburger>
      {open && (
        <Menu>
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
        </Menu>
      )}
    </StyledMobileMenu>
  );
}

export default MobileMenu;
