import { Button } from '@sd/product-feedback-ui-components';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SeeProductCardProps {
  name: string;
  description: string;
  cents: number;
  isNew?: boolean;
  src: string;
}

const StyledSeeProductCard = styled.div`
  color: pink;
`;

export function SeeProductCard({
  name,
  description,
  cents,
  isNew,
  src,
}: SeeProductCardProps) {
  return (
    <StyledSeeProductCard>
      {isNew && <div>New Product</div>}
      <h2>{name}</h2>
      <p>{description}</p>
      <div>{cents}</div>
      <Button>See Product</Button>
    </StyledSeeProductCard>
  );
}

export default SeeProductCard;
