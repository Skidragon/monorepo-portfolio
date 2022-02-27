import React from 'react';
import styled from 'styled-components';

type DiskProps = {
  value: number;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
const StyledDisk = styled.div<DiskProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
  margin-bottom: 0.2rem;
  background: black;
  color: white;
  position: relative;
  z-index: 2;
  width: ${(props) => props.value * 20}%;
  pointerevents: none;
`;
export const Disk: React.FunctionComponent<DiskProps> = ({ value }) => {
  return <StyledDisk value={value}>{value}</StyledDisk>;
};
