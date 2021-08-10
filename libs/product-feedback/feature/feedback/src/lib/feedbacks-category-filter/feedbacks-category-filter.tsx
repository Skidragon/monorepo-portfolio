import { Box, Button } from '@sd/product-feedback-ui-components';
import styled, { css } from 'styled-components';
import React from 'react';
/* eslint-disable-next-line */
export interface FeedbacksCategoryFilterProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >,
    'onClick'
  > {
  data: string[];
  onClick: (event: React.MouseEvent<HTMLUListElement>, value: string) => void;
  value: string;
}
const StyledFeedbacksCategoryFilter = styled(Box)``;

const Cluster = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space, 1rem);
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
`;
const ButtonBadge = styled(Button)<{ isActive: boolean }>`
  border-radius: 12px;
  ${(props) =>
    props.isActive &&
    css`
      background: #4661e6;
      color: white;
      box-shadow: unset;
    `}
`;
export const FeedbacksCategoryFilter = React.forwardRef<
  HTMLUListElement,
  FeedbacksCategoryFilterProps
>((props, ref) => {
  const { data, onClick, value, ...rest } = props;
  return (
    <StyledFeedbacksCategoryFilter>
      <Cluster
        onClick={(e: React.MouseEvent<HTMLUListElement>) => {
          const input = e.target as HTMLElement;
          if (input.nodeName === 'BUTTON') {
            onClick(e, input.innerText);
          }
        }}
        {...rest}
        ref={ref}
      >
        {data.map((text) => {
          return (
            <li key={text}>
              <ButtonBadge isActive={value === text}>{text}</ButtonBadge>
            </li>
          );
        })}
      </Cluster>
    </StyledFeedbacksCategoryFilter>
  );
});

export default FeedbacksCategoryFilter;
