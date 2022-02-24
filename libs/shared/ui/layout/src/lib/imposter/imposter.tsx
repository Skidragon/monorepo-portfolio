import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ImposterProps {}

const StyledImposter = styled.div`
  color: pink;
`;

export function Imposter(props: ImposterProps) {
  return (
    <StyledImposter>
      <h1>Welcome to imposter!</h1>
    </StyledImposter>
  );
}

export default Imposter;
