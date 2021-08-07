import styled, { css } from 'styled-components';
/* eslint-disable-next-line */
export interface StackProps {
  children: React.ReactNode;
  isRecursive?: boolean;
  space?: number;
}

const StyledStack = styled.div<Pick<StackProps, 'isRecursive' | 'space'>>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: var(--flow, 1.5rem);
  }
`;

export function Stack(props: StackProps) {
  return <StyledStack {...props} />;
}

export default Stack;
