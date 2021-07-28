import styled from 'styled-components';
import { Box } from '../box/box';
/* eslint-disable-next-line */
export interface CardProps {}

const StyledCard = styled(Box)`
  position: relative;
  min-height: 10rem;
`;

const IconAvatar = styled.div`
  display: inline-flex;
  padding: 1em;
  border-radius: 50%;
  top: 0;
  left: 0;
  transform: translate(30%, -60%);
  color: white;
  font-size: 2rem;
  font-weight: 700;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
`;
export function Card(props: CardProps) {
  return (
    <StyledCard>
      <IconAvatar>+</IconAvatar>
    </StyledCard>
  );
}

export default Card;
