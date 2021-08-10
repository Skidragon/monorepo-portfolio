import styled, { css } from 'styled-components';
import { Button, Box, Badge } from '@sd/product-feedback-ui-components';
import React, { useState } from 'react';
import Link from 'next/link';
import { BaseDiv } from '@sd/react-component-types';
/* eslint-disable-next-line */
type FeedbackStatusType = 'PLANNED' | 'IN_PROGRESS' | 'LIVE';
export interface FeedbackProps extends BaseDiv {
  title: string;
  description: string;
  category: string;
  statusType?: FeedbackStatusType;
  showStatus?: boolean;
  isCompactView?: boolean;
}

const StyledFeedbackBox = styled(Box)<
  Pick<FeedbackProps, 'statusType' | 'showStatus' | 'isCompactView'>
>`
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'm m'
    'v c';
  grid-gap: 1rem;
  .main-content {
    display: grid;
    grid-area: m;
    .category {
      justify-self: start;
    }
  }
  .vote-btn {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0.5rem;
    grid-area: v;
    justify-self: flex-start;
    align-self: center;
    & > * {
      text-align: center;
    }
  }
  .comment-btn {
    grid-area: c;
    justify-self: flex-end;
    align-self: center;
  }
  background: white;
  ${(props) => {
    if (props.showStatus) {
      if (props.statusType === 'PLANNED') {
        return css`
          border-top: 5px solid orange;
        `;
      }
      if (props.statusType === 'IN_PROGRESS') {
        return css`
          border-top: 5px solid purple;
        `;
      }
      if (props.statusType === 'LIVE') {
        return css`
          border-top: 5px solid blue;
        `;
      }
    }
    return css``;
  }}
  max-width: 750px;
  ${(props) =>
    !props.isCompactView &&
    css`
      @media (min-width: 600px) {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: auto 1fr auto;
        grid-template-areas:
          'v m c'
          'v m c'
          '. m c';
        .main-content {
          grid-area: m;
        }
        .vote-btn {
          grid-gap: 0;
          grid-template-rows: 1fr 1fr;
          grid-template-columns: unset;
          grid-area: v;
          align-self: flex-end;
          height: 100%;
        }
        .comment-btn {
          grid-area: c;
          align-self: center;
        }
      }
    `}
`;
const Status = styled.span``;
export const Feedback = React.forwardRef<HTMLDivElement, FeedbackProps>(
  (props, ref) => {
    const {
      title,
      description,
      category,
      statusType,
      showStatus = false,
      isCompactView = false,
      ...rest
    } = props;
    const [hasUpvote, setHasUpvote] = useState(false);
    const upvotes = hasUpvote ? 102 + 1 : 102;
    return (
      <StyledFeedbackBox
        showStatus={showStatus}
        isCompactView={isCompactView}
        statusType={statusType}
        {...rest}
        ref={ref}
      >
        <div className="main-content">
          {showStatus ? <Status>{statusType}</Status> : null}
          <h3>{title}</h3>
          <p>{description}</p>
          <Badge className="category">{category}</Badge>
        </div>
        <Button
          className="vote-btn"
          onClick={() => {
            setHasUpvote((prevState) => !prevState);
          }}
          isActive={hasUpvote}
        >
          <div>^</div>
          <div>{upvotes}</div>
        </Button>
        <Link href={'/product/1/feedback/1/details'} passHref={true}>
          <Button className="comment-btn">
            2
            <span role={'img'} aria-label="comments">
              🗯️
            </span>
          </Button>
        </Link>
      </StyledFeedbackBox>
    );
  }
);

export default Feedback;
