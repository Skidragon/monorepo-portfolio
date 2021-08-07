import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SwitcherProps {}

const StyledSwitcher = styled.div`
  color: pink;
`;

export function Switcher(props: SwitcherProps) {
  return (
    <StyledSwitcher>
      <h1>Welcome to switcher!</h1>
    </StyledSwitcher>
  );
}

export default Switcher;
