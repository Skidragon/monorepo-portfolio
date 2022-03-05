import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BannerProps {
  children: string;
}

const StyledBanner = styled.div`
  width: 100%;
  color: var(--white, hsl(0, 0%, 97%));
  background: var(--secondary-color, hsl(0, 0%, 3%));
  text-transform: uppercase;
  text-align: center;
`;
const Heading = styled.h1`
  padding: 2em 0.5em;
`;
export function Banner(props: BannerProps) {
  return (
    <StyledBanner>
      <Heading>{props.children}</Heading>
    </StyledBanner>
  );
}

export default Banner;
