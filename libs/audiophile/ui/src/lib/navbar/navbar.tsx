import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface NavbarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: React.ReactNode;
  hasEmphasis?: boolean;
  zIndex?: number;
}

const StyledNavbar = styled.div<Pick<NavbarProps, 'hasEmphasis' | 'zIndex'>>`
  @keyframes emphasis {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  display: grid;
  grid-template-columns: auto 1fr auto;
  position: fixed;
  z-index: ${(props) => props.zIndex};
  top: 0;
  width: 100%;
  padding: 2em 1em;
  justify-items: center;
  align-items: flex-end;
  background: black;
  color: white;
  ${(props) =>
    props.hasEmphasis &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 3px;
        animation: emphasis 500ms both ease-in;
        background: var(--primary-color);
      }
    `}
`;

export function Navbar({
  hasEmphasis = false,
  zIndex = 100,
  children,
  ...props
}: NavbarProps) {
  return (
    <StyledNavbar hasEmphasis={hasEmphasis} zIndex={zIndex}>
      {children}
    </StyledNavbar>
  );
}

export default Navbar;
