import { SelectHTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DropdownProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {}

const StyledDropdown = styled.select`
  --color-background-dropdown: #373f68;
  --color-text-dropdown: white;
  display: inline-flex;
  padding: 1em 1.5em;
  text-transform: capitalize;
  border-radius: 6px;
  position: relative;
  border: none;
  background: var(--color-background-dropdown);
  color: var(--color-text-dropdown);
  position: relative;
  cursor: pointer;
`;

export const DropdownOption = styled.option`
  background: var(--color-background-dropdown-option, white);
  color: var(--color-text-dropdown-option, #373f68);
`;
export function Dropdown({ children, value = '', id = '' }: DropdownProps) {
  return (
    <StyledDropdown value={value} id={id}>
      {children}
    </StyledDropdown>
  );
}

export default Dropdown;
