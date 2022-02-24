import styled, { css } from 'styled-components';
import { useQuery } from 'react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const StyledPage = styled.div`
  background: #202733;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1em;
`;

const Card = styled.div`
  background: #313a48;
  border-radius: 15px;
  padding: 5em;
  max-width: 40rem;
  position: relative;
  & > * + * {
    margin-top: var(--flow);
  }
`;
const AdviceHeading = styled.h1`
  color: #53ffaa;
  font-size: 1rem;
`;
const Advice = styled.p`
  color: #cee3e9;
  font-size: 2rem;
`;
const DesktopDivider = styled.div`
  display: none;
  @media screen and (min-width: 30em) {
    display: flex;
    justify-content: center;
  }
`;
const MobileDivider = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 30em) {
    display: none;
  }
`;
const DiceButton = styled.button<{ isError: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
  color: #202733;
  background: ${(props) => (props.isError ? 'red' : '#53ffaa')};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) translateY(50%);
  transition: box-shadow 1s;
  overflow-x: hidden;
  &:hover {
    box-shadow: 0px 0px 40px #53ffaa;
  }
  ${(props) =>
    props.isError
      ? css`
          background: #c70000;
        `
      : ''};
  ${(props) =>
    props.disabled
      ? css`
          background: grey;
          &:hover {
            box-shadow: none;
          }
        `
      : ''};
`;
const Dice = styled.div<{ on: boolean }>`
  display: flex;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(359deg);
    }
  }
  transform-origin: center center;
  animation: ${(props) => (props.on ? 'rotate 1s linear infinite' : 'none')};
`;
export function Index() {
  const [canFetch, setCanFetch] = useState(false);
  const { isFetching, isError, data, refetch } = useQuery<{
    slip: {
      id: number;
      advice: string;
    };
  }>('advice', {
    onSuccess: () => {
      setTimeout(() => {
        setCanFetch(true);
      }, 2200);
    },
  });
  useEffect(() => {
    if (isFetching) {
      setCanFetch(false);
    }
  }, [isFetching]);
  return (
    <StyledPage>
      <Card>
        <AdviceHeading>Advice #{data?.slip?.id || ''}</AdviceHeading>
        <Advice>“{data?.slip?.advice || ''}”</Advice>
        <DesktopDivider>
          <Image
            src="/pattern-divider-desktop.svg"
            width="444"
            height="16"
            alt=""
          />
        </DesktopDivider>
        <MobileDivider>
          <Image
            src="/pattern-divider-mobile.svg"
            width="295"
            height="16"
            alt=""
          />
        </MobileDivider>
        <DiceButton
          onClick={() => {
            refetch();
            setCanFetch(false);
          }}
          isError={isError}
          disabled={isFetching || !canFetch}
        >
          <Dice on={isFetching}>
            <Image src="/icon-dice.svg" height="24" width="24" alt="" />
          </Dice>
        </DiceButton>
      </Card>
    </StyledPage>
  );
}

export default Index;
