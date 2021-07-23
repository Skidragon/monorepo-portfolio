import React, {
  DetailedHTMLProps,
  SelectHTMLAttributes,
  useReducer,
  useState,
} from 'react';
import styled from 'styled-components';
import { createContext, useContext } from 'react';
import { useEffect } from 'react';
import { __values } from 'tslib';
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
const DropdownContext = createContext<IOption>({
  value: '',
  children: '',
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
interface IOptionList {
  open: boolean;
  children: React.ReactNode;
}
interface IOptionListStyle {
  open: boolean;
}
const StyledOptionsList = styled.ul<IOptionListStyle>`
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
interface IOption<V> {
  value: V;
  children: React.ReactNode;
}
interface IOptionStyle {
  isSelected: boolean;
}
const StyledOption = styled.li<IOptionStyle>`
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
  const [options] = useState<IOption[]>(() =>
    children.map((child) => child.props.value)
  );
  const selectedOption = (): IOption => {
    return options.find((option) => {
      return option.value === controlledValue;
    });
  };
  return (
    <DropdownContext.Provider value={selectedOption}>
      <StyledDropdown
        onClick={(e) => {
          setOpen((prevState) => !prevState);
          console.log(e.target.value);
        }}
      >
        <div>
          <span>{label} </span>{' '}
          {selectedOption.value ? (
            <span>{` : ${selectedOption.value}`}</span>
          ) : (
            ''
          )}
        </div>
        <OptionsList
          onClick={(e) => {
            setOpen(false);
          }}
          onHover={(e) => {
            console.log(e);
          }}
          open={open}
        >
          {children}
        </OptionsList>
      </StyledDropdown>
    </DropdownContext.Provider>
  );
}
export const OptionsList = ({ children, open }: IOptionList) => {
  return <StyledOptionsList open={open}>{children}</StyledOptionsList>;
};
export const Option = ({ children, value }: IOption) => {
  const selectedOption = React.useContext(DropdownContext);
  return (
    <StyledOption
      data-value={value}
      isSelected={value === selectedOption.value}
    >
      {children}
    </StyledOption>
  );
};

export default Dropdown;
