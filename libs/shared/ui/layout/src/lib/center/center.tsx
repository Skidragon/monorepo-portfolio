import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CenterProps {}

const StyledCenter = styled.div`
  color: pink;
`;

export function Center(props: CenterProps) {
  return (
    <StyledCenter>
      <h1>Welcome to center!</h1>
    </StyledCenter>
  );
}

export default Center;
