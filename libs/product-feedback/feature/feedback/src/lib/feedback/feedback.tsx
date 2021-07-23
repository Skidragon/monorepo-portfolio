import styled from 'styled-components';
import { Button, Box, Badge } from '@sd/product-feedback-ui-components';
/* eslint-disable-next-line */
export interface FeedbackProps {}

const StyledFeedbackBox = styled(Box)`
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
  max-width: 750px;
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
`;

export function Feedback(props: FeedbackProps) {
  return (
    <StyledFeedbackBox>
      <div className="main-content">
        <h3>Add Tags for solutions</h3>
        <p>Easier to search for solutions based on a specific stack.</p>
        <Badge className="category">Enhancement</Badge>
      </div>
      <Button className="vote-btn">
        <div>^</div>
        <div>102</div>
      </Button>
      <Button className="comment-btn">2C</Button>
    </StyledFeedbackBox>
  );
}

export default Feedback;
