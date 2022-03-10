import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ModalBackdropProps {}

const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000000a4;
  z-index: var(--modal-backdrop-z-index);
`;

export function ModalBackdrop(props: ModalBackdropProps) {
  return <StyledModalBackdrop {...props} />;
}

export default ModalBackdrop;
