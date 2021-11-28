import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BannerProps {
  children: string;
}

const StyledBanner = styled.div`
  padding: 3em;
  width: 100%;
  color: var(--white, hsl(0, 0%, 97%));
  background: var(--secondary-color, hsl(0, 0%, 3%));
  text-align: center;
`;

export function Banner(props: BannerProps) {
  return (
    <StyledBanner>
      <h1>{props.children}</h1>
    </StyledBanner>
  );
}

export default Banner;
