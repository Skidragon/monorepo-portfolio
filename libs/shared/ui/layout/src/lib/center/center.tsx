import styled from 'styled-components';

/* eslint-disable-next-line */
export type CenterProps = {
  children: React.ReactNode;
};

const StyledCenter = styled.div`
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--measure);
`;

export function Center(props: CenterProps) {
  return <StyledCenter>{props.children}</StyledCenter>;
}

export default Center;
