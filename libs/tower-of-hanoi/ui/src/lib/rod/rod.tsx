import React from 'react';
import styled, { css } from 'styled-components';
type RodProps = {
  children: React.ReactNode;
  isActive: boolean;
  number: number;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const StyledRod = styled.div<RodProps>`
  display: flex;
  flex-flow: column-reverse;
  align-items: center;
  justify-content: flex-start;
  margin-right: 1rem;
  cursor: pointer;
  position: relative;
  &::after {
    content: '${(props) => props.number}';
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    position: absolute;
    font-size: 3rem;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    color: #d3d3d373;
    background: ${(props) => (props.isActive ? 'lightblue' : 'grey')};
    ${(props) => {
      if (props.isActive) {
        return css`
          background: lightblue;
          font-weight: 900;
        `;
      } else {
        return css`
          background: grey;
          font-weight: 300;
        `;
      }
    }}
  }
`;

export const Rod = React.forwardRef<HTMLDivElement, RodProps>(
  ({ children, isActive = false, number = 1, ...props }, ref) => {
    return (
      <StyledRod isActive={isActive} number={number} {...props} ref={ref}>
        {children}
      </StyledRod>
    );
  }
);
