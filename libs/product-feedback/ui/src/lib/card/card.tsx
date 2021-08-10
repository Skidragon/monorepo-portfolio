import styled from 'styled-components';
import { Box } from '../box/box';
/* eslint-disable-next-line */
export interface CardProps {
  title: string;
  children: React.ReactNode;
  icon?: string;
}

const StyledCard = styled(Box)`
  position: relative;
  padding-top: 3rem;
  margin-top: 2rem;
`;

const IconAvatar = styled.div`
  display: inline-flex;
  padding: 1em;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(30%, -60%);
  color: white;
  font-size: 2rem;
  font-weight: 700;
  background: var(--gradient-primary);
`;
const Title = styled.h2`
  margin-bottom: calc(var(--flow) * 1.5);
`;
export function Card(props: CardProps) {
  return (
    <StyledCard>
      <IconAvatar>{props.icon || ''}</IconAvatar>
      <Title>{props.title}</Title>
      <p>{props.children}</p>
    </StyledCard>
  );
}

export default Card;
