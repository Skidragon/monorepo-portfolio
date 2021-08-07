import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiLayoutProps {}

const StyledSharedUiLayout = styled.div`
  color: pink;
`;

export function SharedUiLayout(props: SharedUiLayoutProps) {
  return (
    <StyledSharedUiLayout>
      <h1>Welcome to shared-ui-layout!</h1>
    </StyledSharedUiLayout>
  );
}

export default SharedUiLayout;
