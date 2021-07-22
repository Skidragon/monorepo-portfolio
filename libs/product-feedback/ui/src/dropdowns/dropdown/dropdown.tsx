import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DropdownProps {}

const StyledDropdown = styled.div`
  color: pink;
`;

export function Dropdown(props: DropdownProps) {
  return (
    <StyledDropdown>
      <h1>Welcome to dropdown!</h1>
    </StyledDropdown>
  );
}

export default Dropdown;
