import styled from 'styled-components';
import Image from 'next/image';
/* eslint-disable-next-line */
export interface ShopCategoryCardProps {
  category: string;
  src: string;
}


const StyledShopCategoryCard = styled.div`
  display: inline-flex;
  width: 100%;
  max-width: 20rem;
  flex-flow: column;
  align-items: center;
  padding: 2em;
  position: relative;
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
`;
export function ShopCategoryCard(props: ShopCategoryCardProps) {
  return (
    <StyledShopCategoryCard>
      <Background />
      <Image width={100} height={100} src={props.src} alt="" />
      <h3>{props.category}</h3>
    </StyledShopCategoryCard>
  );
}

export default ShopCategoryCard;
