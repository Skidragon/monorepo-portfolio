import styled from 'styled-components';

/* eslint-disable-next-line */
export interface IconProps {}

const StyledIcon = styled.div`
  color: pink;
`;

export function Icon(props: IconProps) {
  return (
    <StyledIcon>
      <h1>Welcome to icon!</h1>
    </StyledIcon>
  );
}

export default Icon;
