import React from 'react';
import styled from 'styled-components';
type RodProps = {
  children: React.ReactNode;
  isActive: boolean;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const StyledRod = styled.div<Pick<RodProps, 'isActive'>>`
  display: flex;
  flex-flow: column-reverse;
  align-items: center;
  justify-content: flex-end;
  background: ${(props) => (props.isActive ? 'lightblue' : 'grey')};
  margin-right: 1rem;
  cursor: pointer;
`;

export const Rod = React.forwardRef<HTMLDivElement, RodProps>(
  ({ children, isActive = false, ...props }, ref) => {
    return (
      <StyledRod isActive={isActive} {...props} ref={ref}>
        {children}
      </StyledRod>
    );
  }
);
