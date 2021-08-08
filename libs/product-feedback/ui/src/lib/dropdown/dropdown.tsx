import styled, { css } from 'styled-components';
import React from 'react';
import { BaseButton, BaseDiv } from '@sd/react-component-types';
import { useSelect, UseSelectProps } from 'downshift';
/* eslint-disable-next-line */
export type DropdownItem<T = any> =
  | {
      value: T;
      label: string;
    }
  | Record<string, never>;
export type DropdownProps = BaseDiv & {
  label: string;
} & UseSelectProps<DropdownItem>;
const Container = styled.div`
  --color-background-dropdown: var(--color-tertiary, #373f68);
  --color-text-dropdown: white;
  position: relative;
  display: inline-flex;
`;
interface DropdownButtonProps extends BaseButton {
  isOpen: DropdownProps['isOpen'];
}
const DropdownButton = styled.button<DropdownButtonProps>`
  appearance: none;
  background: var(--color-background-dropdown);
  color: var(--color-text-dropdown);
  border: 0;
  font-size: 1;
  font-weight: 600;
  padding: 1em 3em 1em 1em;
  border-radius: 6px;
  text-align: left;
  position: relative;
  width: 100%;
  max-width: 400px;
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

const DropdownMenu = styled.ul<{ isOpen: DropdownProps['isOpen'] }>`
  display: none;
  position: absolute;
  z-index: 1000;
  bottom: 0;
  transform: translateY(100%);
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: pointer;
  color: #5e5e5e;
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
`;

type DropdownOptionStyles = {
  highlightedIndex: number;
  index: number;
  selectedItem: UseSelectProps<DropdownItem>['selectedItem'];
};
const DropdownOption = styled.li<DropdownOptionStyles>`
  padding: 1em 5em 1em 1em;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: white;

  ${(props) => {
    if (props.highlightedIndex === props.index) {
      return css`
        color: var(--color-primary, #d500d5);
      `;
    }
    return css``;
  }}
  &:first-child,
  & + li {
    border-bottom: 2px solid #f2f2f2;
  }
  &::after {
    ${(props) => {
      if (props.selectedItem && props.selectedItem?.value === props.value) {
        return css`
          content: '✔️';
        `;
      } else {
        return css`
          content: '';
        `;
      }
    }};
    position: absolute;
    right: 1em;
  }
  &:hover,
  &:focus {
    color: var(--color-primary, #d500d5);
  }
`;

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ label, items, id, ...props }, ref) => {
    const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
    } = useSelect({
      items,
      ...props,
    });
    const hasSelectedItem = Boolean(selectedItem?.value);
    return (
      <Container id={id} ref={ref}>
        <DropdownButton {...getToggleButtonProps()} isOpen={isOpen}>
          {hasSelectedItem ? `${label}:` : label}
          {hasSelectedItem ? (
            <span
              style={{
                marginLeft: '.5em',
              }}
            >
              {selectedItem?.label || ''}
            </span>
          ) : (
            ''
          )}
        </DropdownButton>
        <DropdownMenu {...getMenuProps()}>
          {isOpen &&
            items.map((item, index) => {
              return React.createElement(DropdownOption, {
                children: item.label,
                value: item.value,
                index,
                key: item.value,
                highlightedIndex,
                selectedItem: props.selectedItem,
                ...{ ...getItemProps({ item, index }) },
              });
            })}
        </DropdownMenu>
      </Container>
    );
  }
);

export default Dropdown;
