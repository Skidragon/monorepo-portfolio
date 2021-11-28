import styled from 'styled-components';
import Image, { ImageProps } from 'next/image';
/* eslint-disable-next-line */
export interface GapCardProps {
  imageProps: ImageProps;
  children: React.ReactNode;
}

const StyledGapCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  @media screen and (min-width: 40em) {
    grid-template-rows: unset;
    grid-template-columns: 1fr 1fr;
  }
`;
const Content = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  & > * + * {
    margin-top: var(--flow, 1em);
  }
  margin: 0;
  background: var(--light-gray);
  border-radius: var(--standard-border-radius);
  padding: 1em;
`;
export function GapCard({ children, ...props }: GapCardProps) {
  return (
    <StyledGapCard>
      <Image {...props.imageProps} />
      <Content>{children}</Content>
    </StyledGapCard>
  );
}

export default GapCard;
