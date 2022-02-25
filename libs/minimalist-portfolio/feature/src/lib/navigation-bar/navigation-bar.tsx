import styled from 'styled-components';
import Image from 'next/image';
import { MobileMenu } from '../..';

/* eslint-disable-next-line */
export interface NavigationBarProps {}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1em;
`;
const Logo = styled.div``;

export function NavigationBar(props: NavigationBarProps) {
  return (
    <Header>
      <Logo>
        <Image height="32" width="61" src="/logo.svg" alt="" />
      </Logo>
      <MobileMenu />
    </Header>
  );
}

export default NavigationBar;
