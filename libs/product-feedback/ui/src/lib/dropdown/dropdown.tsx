import styled, { css } from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import {
  BaseButton,
  BaseDiv,
  BaseLI,
  BaseUList,
} from '@sd/react-component-types';

/* eslint-disable-next-line */
type DropdownChild = React.ReactElement<DropdownOptionProps>;
export interface DropdownProps extends BaseDiv {
  isOpen: boolean;
  label: string;
  value: string;
  children: DropdownChild[];
  onOptionChange: (value: string) => void;
}
const Container = styled(({ children, ...props }) => {
  const { setIsOpen } = useDropdown();
  const containerRef = useRef<HTMLDivElement | null>(null);
  useClickAway(containerRef, () => setIsOpen(false));
  return (
    <div
      {...props}
      ref={(ref) => {
        containerRef.current = ref;
      }}
    >
      {children}
    </div>
  );
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
  padding: 1em
    ${() => {
      const { hasOptionSelected } = useDropdown();
      if (hasOptionSelected) {
        return '10em';
      } else {
        return '5em';
      }
    }}
    1em 1em;
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
  &:hover,
  &:focus {
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
const DropdownMenu = styled(({ children, ...props }: DropdownMenuProps) => {
  const ref = useRef<HTMLUListElement | null>(null);
  const { setIsOpen, isOpen, onOptionChange } = useDropdown();
  useEffect(() => {
    if (ref?.current) {
      const firstLiChild = ref.current.children[0] as HTMLLIElement;
      firstLiChild.focus();
    }
  }, [isOpen]);
  return (
    <ul
      role="listbox"
      aria-expanded={isOpen}
      onClick={(e) => {
        const li = e.target as HTMLLIElement;
        onOptionChange(li.dataset.value as string);
      }}
      onKeyDown={(e) => {
        const li = e.target as HTMLLIElement;
        if (e.key === 'ArrowUp' && li.previousElementSibling) {
          const previousLi = li.previousElementSibling as HTMLLIElement;
          previousLi.focus();
        }
        if (e.key === 'ArrowDown' && li.nextElementSibling) {
          const nextLi = li.nextElementSibling as HTMLLIElement;
          nextLi.focus();
        }
        if (e.key === 'Home' && ref.current) {
          const firstLiChild = ref.current.children[0] as HTMLLIElement;
          firstLiChild.focus();
        }
        if (e.key === 'End' && ref.current) {
          const lastChildIndex = ref.current.children.length - 1;
          const lastLiChild = ref.current.children[
            lastChildIndex
          ] as HTMLLIElement;
          lastLiChild.focus();
        }
        if (e.key === 'Enter') {
          setIsOpen(false);
          onOptionChange(li.dataset.value as string);
        }
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      }}
      ref={ref}
      {...props}
    >
      {children}
    </ul>
  );
})`
  display: none;
  position: absolute;
  top: 110%;
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: pointer;
  color: #5e5e5e;
  &[aria-expanded='true'] {
    display: block;
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
  }
`;
interface DropdownOptionProps extends BaseLI {
  value: string;
}
export const DropdownOption = styled(
  ({ children, value, ...props }: DropdownOptionProps) => {
    const { controlledValue, setIsOpen } = useDropdown();
    const isSelected = Boolean(controlledValue === value);
    return (
      <li
        role="option"
        onClick={() => setIsOpen(false)}
        aria-selected={isSelected}
        tabIndex={0}
        data-value={value}
        {...props}
      >
        {children}
      </li>
    );
  }
)`
  padding: 1em 5em 1em 1em;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:first-child,
  & + li {
    border-bottom: 2px solid #f2f2f2;
  }
  &::after {
    content: '';
    ${(props) => {
      const { controlledValue } = useDropdown();
      const isSelected = Boolean(controlledValue === props.value);
      return isSelected
        ? css`
            content: '✔️';
          `
        : css`
            content: none;
          `;
    }};
    position: absolute;
    right: 1em;
  }
  &:hover,
  &:focus {
    color: var(--color-primary, #d500d5);
  }
`;
interface DropdownProviderValues {
  controlledValue: string;
  hasControlledValue: boolean;
  isOpen: boolean;
  hasOptionSelected: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onOptionChange: DropdownProps['onOptionChange'];
}
const DropdownContext = React.createContext<DropdownProviderValues | null>(
  null
);
const useDropdown = () => {
  const context = React.useContext(DropdownContext);

  if (!context) throw new Error('Expected to be wrapped in a DropdownProvider');

  return context;
};
export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ value: controlledValue, onOptionChange, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = props.children.find((option) => {
      return option.props.value === controlledValue;
    });

    return (
      <DropdownContext.Provider
        value={{
          hasControlledValue: Boolean(controlledValue),
          controlledValue,
          hasOptionSelected: Boolean(selectedOption),
          isOpen,
          setIsOpen,
          onOptionChange,
        }}
      >
        <Container {...props} ref={ref}>
          <DropdownButton
            isOpen={isOpen}
            onClick={() => {
              setIsOpen((prevOpen) => !prevOpen);
            }}
          >{`${props.label}${
            controlledValue ? ` : ${selectedOption?.props.children}` : ''
          }`}</DropdownButton>
          <DropdownMenu isOpen={isOpen}>{props.children}</DropdownMenu>
        </Container>
      </DropdownContext.Provider>
    );
  }
);

export default Dropdown;
