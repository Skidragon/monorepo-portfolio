import React, {
  DetailedHTMLProps,
  SelectHTMLAttributes,
  useReducer,
  useState,
} from 'react';
import styled from 'styled-components';
import { createContext, useContext } from 'react';
import { useEffect } from 'react';
/* eslint-disable-next-line */
export interface DropdownProps
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string;
}
export interface OptionsProps<V> {
  children: React.ReactNode;
  value: V;
}
const DropdownContext = createContext<{ value: string }>({
  value: '',
  open: false,
});
const StyledDropdown = styled.div`
  display: inline-flex;
  background: #373f68;
  padding: 1em 1.5em;
  color: white;
  text-transform: capitalize;
  border-radius: 6px;
  position: relative;
`;
const StyledOptionsList = styled.ul<{ open: true }>`
  display: ${(props) => (props.open ? 'flex' : ' none')};
  flex-flow: column;
  position: absolute;
  padding: 1em;
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(100%);
  background: white;
  color: blue;
  list-style-type: none;
  overflow: hidden;
  border-radius: 6px;
  & > li:hover {
    background: blue;
  }
`;
const StyledOption = styled.li`
  position: relative;
  border: 2px solid lightgrey;
  padding: 1em;
  &:hover,
  &:focus {
    color: white;
    background: blue;
  }
  &::after {
    content: '✔️';
    position: absolute;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
  }
`;
export function Dropdown({
  label = 'Sort By',
  value: controlledValue = '',
  onChange,
  children,
  ...props
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  useEffect(() => {
    if (children) {
      children.forEach((child) => {
        if(child.props.value === controlledValue) {
          
        }
      });
    }
  }, [children, controlledValue]);
  return (
    <StyledDropdown
      onClick={(e) => {
        setOpen((prevState) => !prevState);
        console.log(e.target.value);
      }}
    >
      <div>
        <span>{label} </span> {value ? <span>{` : value`}</span> : ''}
      </div>
      <OptionsList
        onClick={() => {
          setOpen(false);
        }}
        open={open}
      >
        {children}
      </OptionsList>
    </StyledDropdown>
  );
}
export const OptionsList = ({ children, open }) => {
  return <StyledOptionsList open={open}>{children}</StyledOptionsList>;
};
export const Option = ({ children, value }) => {
  return (
    <StyledOption value={value} isSelected={true}>
      {children}
    </StyledOption>
  );
};

export default Dropdown;
