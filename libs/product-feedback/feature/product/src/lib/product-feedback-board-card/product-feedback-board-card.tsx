import styled from 'styled-components';
import { Box, Button } from '@sd/product-feedback-ui-components';
import { useMedia } from 'react-use';
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
/* eslint-disable-next-line */
export interface ProductFeedbackBoardCardProps {}
const media = {
  phone: '23.5em',
  tablet: '48em',
  desktop: '90em',
};
/*
TODO:
- Use Portal to avoid z-index problems
- Animate it from mobile to tablet

*/
const NavbarPlaceholder = styled.div`
  padding: 6rem;
  width: 100%;
  background: red;
`;
// https://blog.bitsrc.io/understanding-react-portals-ab79827732c7
const ProductFeedbackBoardCardStyled = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: var(--gradient-primary);
  position: fixed;
  border-radius: unset;
  top: 0;
  left: 0;
  right: 0;
  @media screen and (min-width: ${media.tablet}) {
    position: unset;
    border-radius: 12px;
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
  const isWide = useMedia(`(min-width: ${media.tablet})`);
  const [doesWindowExist, setDoesWindowExist] = useState(false);
  useEffect(() => {
    setDoesWindowExist(true);
  }, []);
  if (isWide) {
    return (
      <ProductFeedbackBoardCardStyled>
        <Headings>
          <ProjectHeading>Frontend Mentor</ProjectHeading>
          <BoardHeading>Feedback Board</BoardHeading>
        </Headings>
      </ProductFeedbackBoardCardStyled>
    );
  } else if (doesWindowExist) {
    return (
      <>
        {ReactDOM.createPortal(
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
        )}
      </>
    );
  } else {
    return null;
  }
}

export default ProductFeedbackBoardCard;
