import { LinkButton } from '@sd/audiophile/ui';
import styled from 'styled-components';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface SeeProductCardProps {
  name: string;
  description: string;
  cents: number;
  isNew?: boolean;
  src: string;
  href: string;
}

const StyledSeeProductCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  max-width: 80ch;
  grid-gap: 1rem;
  & > * + * {
    margin-top: var(--flow, 1.5rem);
  }
  @media screen and (min-width: 70em) {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    max-width: 160ch;
  }
`;
const ProductImage = styled.div`
  position: relative;
  width: 100%;
  height: 25rem;
  background: lightgrey;
`;
const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  & > * + * {
    margin-top: var(--flow, 1.5rem);
  }
  @media screen and (min-width: 70em) {
    align-items: flex-start;
    text-align: left;
    justify-content: center;
  }
`;
const Description = styled.p``;
export function SeeProductCard({
  name,
  description,
  cents,
  isNew,
  src,
  href,
}: SeeProductCardProps) {
  return (
    <StyledSeeProductCard>
      <ProductImage>
        <Image src={src} layout={'fill'} objectFit={'contain'} />
      </ProductImage>
      <Content>
        {isNew && <div>New Product</div>}
        <h2>{name}</h2>
        <Description>{description}</Description>
        <LinkButton href={href}>See Product</LinkButton>
      </Content>
    </StyledSeeProductCard>
  );
}

export default SeeProductCard;
