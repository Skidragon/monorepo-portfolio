import { StepperField } from '@sd/audiophile/ui';
import { Button } from '@sd/product-feedback-ui-components';
import './add-product-card.module.css';

/* eslint-disable-next-line */
export interface AddProductCardProps {
  name: string;
  description: string;
  cents: number;
  isNew?: boolean;
  src: string;
}

export function AddProductCard({
  name,
  description,
  cents,
  isNew,
  src,
}: AddProductCardProps) {
  return (
    <div>
      {isNew && <div>New Product</div>}
      <h2>{name}</h2>
      <p>{description}</p>
      <div>{cents}</div>
      <StepperField quantity={1} min={1} max={20} />
      <Button>Add To Cart</Button>
    </div>
  );
}

export default AddProductCard;
