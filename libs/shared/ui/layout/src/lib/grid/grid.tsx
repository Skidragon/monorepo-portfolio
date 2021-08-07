import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GridProps {}

const StyledGrid = styled.div`
  color: pink;
`;

export function Grid(props: GridProps) {
  return (
    <StyledGrid>
      <h1>Welcome to grid!</h1>
    </StyledGrid>
  );
}

export default Grid;
