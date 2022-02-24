import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SidebarProps {
  children: React.ReactNode;
}

const StyledSidebar = styled.div`
  & {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space, 1rem);
  }

  & > :first-child {
    flex-grow: 1;
  }

  & > :last-child {
    flex-basis: 0;
    flex-grow: 999;
    min-width: 50%;
  }
`;

export function Sidebar(props: SidebarProps) {
  return <StyledSidebar>{props.children}</StyledSidebar>;
}

export default Sidebar;
