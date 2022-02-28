import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
/* eslint-disable-next-line */
export interface ShopCategoryCardProps {
  category: string;
  src: string;
}

const StyledShopCategoryCard = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 2em 4em;
  max-width: 20rem;
  color: black;
  & > * + * {
    margin-top: 1.5rem;
  }
`;
const Background = styled.div`
  position: absolute;
  z-index: -1;
  height: 65%;
  width: 100%;
  bottom: 0;
  background: lightgrey;
  border-radius: 8px;
`;
export function ShopCategoryCard(props: ShopCategoryCardProps) {
  return (
    <StyledShopCategoryCard>
      <Background />
      <Image width={100} height={100} src={props.src} alt="" />
      <h3>{props.category}</h3>
      <Link href={`/${props.category}`}>
        <a>Shop</a>
      </Link>
    </StyledShopCategoryCard>
  );
}

export default ShopCategoryCard;
