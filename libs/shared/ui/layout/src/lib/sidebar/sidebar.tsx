import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SidebarProps {}

const StyledSidebar = styled.div`
  color: pink;
`;

export function Sidebar(props: SidebarProps) {
  return (
    <StyledSidebar>
      <h1>Welcome to sidebar!</h1>
    </StyledSidebar>
  );
}

export default Sidebar;
