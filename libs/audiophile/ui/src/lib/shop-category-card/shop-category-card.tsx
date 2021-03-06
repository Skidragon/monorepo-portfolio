import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@sd/audiophile/types';
/* eslint-disable-next-line */

export interface ShopCategoryCardProps {
  name: string;
  src: string;
  slug: string;
}

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
    bottom: 0;
    width: 100%;
    height: 70%;
    background: #f2f2f2;
    position: absolute;
    z-index: -1;
    border-radius: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const CategoryText = styled.h3`
  text-transform: capitalize;
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
    color: orange;
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
        <CategoryText>{props.name}</CategoryText>
        <Link href={`/category/${props.slug}`} passHref>
          <ShopButton>Shop</ShopButton>
        </Link>
      </Content>
    </StyledShopCategoryCard>
  );
}

export default ShopCategoryCard;
