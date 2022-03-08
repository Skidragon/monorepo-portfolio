import styled from 'styled-components';
import { useRouter } from 'next/router';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

/* eslint-disable-next-line */
export interface GoBackLinkProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const StyledGoBackLink = styled.button`
  color: grey;
  &:hover {
    text-decoration: underline;
  }
`;

export const GoBackLink = React.forwardRef<HTMLButtonElement, GoBackLinkProps>(
  (props, ref) => {
    const router = useRouter();
    return (
      <StyledGoBackLink onClick={() => router.back()} {...props} ref={ref}>
        Go Back
      </StyledGoBackLink>
    );
  }
);

export default GoBackLink;
