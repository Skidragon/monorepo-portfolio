import styled, { css } from 'styled-components';
import React, { useContext } from 'react';
import {
  BaseButton,
  BaseDiv,
  BaseLI,
  BaseUList,
} from '@sd/react-component-types';

/* eslint-disable-next-line */
export interface DropdownProps extends BaseDiv {
  isOpen: boolean;
  label: string;
  value: string;
}
const Container = styled(({ children, ...props }) => {
  return <div {...props}>{children}</div>;
})`
  --color-background-dropdown: #373f68;
  --color-text-dropdown: white;
  position: relative;
  display: inline-block;
`;
interface DropdownButtonProps extends BaseButton {
  isOpen: DropdownProps['isOpen'];
}
const DropdownButton = styled(({ children, ...props }: DropdownButtonProps) => {
  return (
    <button type="button" aria-haspopup="true" {...props}>
      {children}
    </button>
  );
})`
  appearance: none;
  background: var(--color-background-dropdown);
  color: var(--color-text-dropdown);
  border: 0;
  font-size: 1;
  font-weight: 600;
  padding: 1em 10em 1em 1em;
  border-radius: 6px;
  text-align: left;
  position: relative;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  &:hover {
    filter: brightness(120%);
  }
  &::after {
    content: '';
    border-width: 0.5rem;
    border-radius: 3px;
    border-style: solid;
    border-color: transparent;
    ${(props) => {
      if (props.isOpen) {
        return css`
          border-bottom-color: inherit;
          top: 25%;
          transform: translateY(-25%);
        `;
      } else {
        return css`
          border-top-color: inherit;
          top: 50%;
          transform: translateY(-25%);
        `;
      }
    }}
    position: absolute;
    right: 1em;
  }
`;

interface DropdownMenuProps extends BaseUList {
  isOpen: DropdownProps['isOpen'];
}
const DropdownMenu = styled(
  ({ children, isOpen, ...props }: DropdownMenuProps) => {
    return (
      <ul role="listbox" aria-expanded={isOpen} {...props}>
        {children}
      </ul>
    );
  }
)`
  position: absolute;
  top: 110%;
  margin: 0;
  list-style: none;
  color: #5e5e5e;
  &[aria-expanded='true'] {
    display: block;
    align-items: center;
    padding: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 1rem;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border-radius: 12px;
    cursor: pointer;
    position: relative;
    & > li {
      padding: 1em 5em 1em 1em;
    }
    & > li:first-child,
    & > li + li {
      border-bottom: 2px solid #f2f2f2;
    }
    & > li::after {
      content: '✔️';
      position: absolute;
      right: 1em;
    }
    & > li:hover,
    & > li:focus {
      color: var(--color-primary, #d500d5);
    }
  }
`;
interface DropdownOptionProps extends BaseLI {
  value: string;
}
export const DropdownOption = styled(
  ({ children, value, ...props }: DropdownOptionProps) => {
    const { controlledValue } = useContext(DropdownContext);
    const isSelected = Boolean(controlledValue === value);
    return (
      <li role="option" aria-selected={isSelected} tabIndex={0} {...props}>
        {children}
      </li>
    );
  }
)`
  background: var(--color-background-dropdown-option, white);
  color: var(--color-text-dropdown-option, #373f68);
`;
const DropdownContext = React.createContext({
  controlledValue: '',
});
export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (props, ref) => {
    console.log(props.value);
    return (
      <DropdownContext.Provider
        value={{
          controlledValue: props.value,
        }}
      >
        <Container {...props} ref={ref}>
          <DropdownButton isOpen={props.isOpen}>{`${props.label}${
            props.value ? ` : ${props.value}` : ''
          }`}</DropdownButton>
          <DropdownMenu isOpen={props.isOpen}>{props.children}</DropdownMenu>
        </Container>
      </DropdownContext.Provider>
    );
  }
);

export default Dropdown;
