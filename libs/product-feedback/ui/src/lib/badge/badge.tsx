import React, { HTMLAttributes, DetailedHTMLProps } from 'react';
import styled from 'styled-components';
import { Box } from '../box/box';
/* eslint-disable-next-line */
export interface BadgeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const StyledBadge = styled(Box)`
  display: inline-flex;
  color: var(--color-primary, purple);
  padding: 0.5em;
`;

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledBadge {...props} ref={ref}>
        {children}
      </StyledBadge>
    );
  }
);

export default Badge;
