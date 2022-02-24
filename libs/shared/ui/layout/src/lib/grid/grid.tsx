import styled from 'styled-components';
import { BaseDiv } from '@sd/react-component-types';
/* eslint-disable-next-line */
export interface GridProps extends BaseDiv {
  rowGap?: number;
  columnGap?: number;
  space?: number;
  children: React.ReactNode;
}

const StyledGrid = styled.div<
  Pick<GridProps, 'rowGap' | 'columnGap' | 'space'>
>`
  display: grid;
  column-gap: ${(props) => props.columnGap || props.space || 1}rem;
  row-gap: ${(props) => props.rowGap || props.space || 1}rem;
  @supports (width: min(250px, 100%)) {
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  }
`;

export function Grid({
  rowGap = 1,
  columnGap = 1,
  space = 1,
  children,
  ...props
}: GridProps) {
  return (
    <StyledGrid
      rowGap={rowGap}
      columnGap={columnGap}
      space={space}
      {...props}
      ref={undefined}
    >
      {children}
    </StyledGrid>
  );
}

export default Grid;
