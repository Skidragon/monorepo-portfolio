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
  padding-top: var(--s3);
  margin-top: 2.6rem;
`;

const IconAvatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  line-height: 0.6;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(30%, -50%);
  color: white;
  font-size: 2rem;
  font-weight: 700;
  background: var(--gradient-primary);
`;
const Title = styled.h2`
  margin-bottom: var(--s2);
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
