import styled from 'styled-components';
import { Box, Button } from '@sd/product-feedback-ui-components';
import { useMedia } from 'react-use';
import ReactDOM from 'react-dom';
/* eslint-disable-next-line */
export interface ProductFeedbackBoardCardProps {}

/*
TODO:
- Use Portal to avoid z-index problems
- Animate it from mobile to tablet

*/
// https://blog.bitsrc.io/understanding-react-portals-ab79827732c7
const ProductFeedbackBoardCardStyled = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );

  @media screen and (min-width: 480px) {
    display: inline-flex;
    padding: 2em;
  }
`;
const Headings = styled.div`
  display: flex;
  flex-flow: column;
  text-align: start;
`;
const ProjectHeading = styled.h1``;
const BoardHeading = styled.h2``;
const Hamburger = styled(Button)``;
export function ProductFeedbackBoardCard(props: ProductFeedbackBoardCardProps) {
  const BREAKPOINT = '480px';
  const isWide = useMedia(`(min-width: ${BREAKPOINT})`);
  if (isWide) {
    return (
      <ProductFeedbackBoardCardStyled>
        <Headings>
          <ProjectHeading>Frontend Mentor</ProjectHeading>
          <BoardHeading>Feedback Board</BoardHeading>
        </Headings>
      </ProductFeedbackBoardCardStyled>
    );
  } else {
    return ReactDOM.createPortal(
      <ProductFeedbackBoardCardStyled>
        <Headings>
          <ProjectHeading>Frontend Mentor</ProjectHeading>
          <BoardHeading>Feedback Board</BoardHeading>
        </Headings>
        <Hamburger>
          <span role="img" aria-label="feedbacks menu">
            🍔
          </span>
        </Hamburger>
      </ProductFeedbackBoardCardStyled>,
      document.body
    );
  }
}

export default ProductFeedbackBoardCard;
