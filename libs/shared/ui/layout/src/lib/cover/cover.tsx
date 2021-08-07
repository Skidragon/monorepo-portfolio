import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CoverProps {}

const StyledCover = styled.div`
  color: pink;
`;

export function Cover(props: CoverProps) {
  return (
    <StyledCover>
      <h1>Welcome to cover!</h1>
    </StyledCover>
  );
}

export default Cover;
