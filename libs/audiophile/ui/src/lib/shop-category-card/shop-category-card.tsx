import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
/* eslint-disable-next-line */
interface Category {
  category: string;
  src: string;
}
export interface ShopCategoryCardProps extends Category {}

const StyledShopCategoryCard = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  height: 100%;
  padding: 2em 4em;
  max-width: 20rem;
  position: relative;
  z-index: 1;
  color: black;
  background: none;
  & > * + * {
    margin-top: 1.5rem;
  }
  & > *:last-child {
    margin-top: auto;
  }
  &::after {
    content: '';
    top: 0;
    bottom: 0;
    width: 100%;

    background: #f2f2f2;
    position: absolute;
    z-index: -1;
  }
`;
const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const ShopButton = styled.a`
  color: grey;
  &::after {
    content: '>';
    margin-left: 0.5rem;
    color: orange;
  }
  &:hover,
  &:focus {
    color: black;
    &::after {
      content: '>>';
      margin-left: 0.5rem;
      color: orange;
    }
  }
`;
export function ShopCategoryCard(props: ShopCategoryCardProps) {
  return (
    <StyledShopCategoryCard>
      <Image width={100} height={100} src={props.src} alt="" />
      <Content>
        <h3>{props.category}</h3>
        <Link href={`/${props.category}`} passHref>
          <ShopButton>Shop</ShopButton>
        </Link>
      </Content>
    </StyledShopCategoryCard>
  );
}

export default ShopCategoryCard;
