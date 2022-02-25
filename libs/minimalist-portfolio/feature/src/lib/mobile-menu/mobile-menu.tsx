import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface MobileMenuProps {}

const StyledMobileMenu = styled.div`
  position: relative;
`;
const Hamburger = styled.div`
  all: unset;
  cursor: pointer;
`;
const NavList = styled.ul`
  display: flex;
  flex-flow: column;
  align-items: center;
  position: absolute;
  right: 0;
  background: var(--grayish-dark-blue);
  color: white;
  & li {
    text-align: center;
    width: 100%;
    white-space: nowrap;
  }
  & a {
    display: block;
    padding: 2em;
  }
  & a:hover {
    background: var(--cyan);
  }
`;
export function MobileMenu(props: MobileMenuProps) {
  const [open, setOpen] = useState(true);
  return (
    <StyledMobileMenu>
      <Hamburger
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {!open && <Image height="13" width="24" src="/hamburger.svg" alt="" />}
        {open && <Image height="19" width="18" src="/close.svg" alt="" />}
      </Hamburger>
      {open && (
        <NavList>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="portfolio">Portfolio</a>
          </li>
          <li>
            <a href="contact">Contact Me</a>
          </li>
        </NavList>
      )}
    </StyledMobileMenu>
  );
}

export default MobileMenu;
