import { Button } from '@sd/audiophile/ui';
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

const StyledSeeProductCard = styled.div``;
const ProductImage = styled.div``;
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
        <Image src={src} layout={'fill'} />
      </ProductImage>
      {isNew && <div>New Product</div>}
      <h2>{name}</h2>
      <p>{description}</p>
      <div>{cents}</div>
      <Button>See Product</Button>
    </StyledSeeProductCard>
  );
}

export default SeeProductCard;
