import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { RadioButton } from '@sd/memory/ui';
import { CreateGameFormValues } from '@sd/memory/types';
import { DevTool } from '@hookform/devtools';
import { useRouter } from 'next/router';

const StyledPage = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: var(--blue-500);
  min-height: 100vh;
  width: 100vw;
  padding: 1em;
`;
const Title = styled.h1`
  color: white;
`;
const Content = styled.div`
  padding: 2em 1em;
  width: 100%;
  background: white;
  border-radius: 1rem;
  max-width: 60ch;
`;
const Form = styled.form`
  display: flex;
  flex-flow: column;
  & > * + * {
    margin-top: 2rem;
  }
`;
const Fieldset = styled.fieldset`
  border: none;
  padding-top: 0.5rem;
`;
const RadioButtonsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  & > * + * {
    margin-left: 1rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;
const Legend = styled.legend`
  font-size: 1rem;
  font-family: sans-serif;
  color: var(--blue-400);
  font-weight: 700;
`;
const SubmitButton = styled.button`
  background: var(--orange);
  padding: 1em;
  width: 100%;
  color: white;
  border-radius: 5rem;
`;

export function Index() {
  const {
    register,
    control,
    watch,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<CreateGameFormValues>({
    defaultValues: {
      gridSize: '4',
      players: '1',
      theme: 'numbers',
    },
  });
  const fields = watch();
  const router = useRouter();
  return (
    <StyledPage>
      <Title>memory</Title>
      {process.env.NODE_ENV === 'development' ? (
        <DevTool control={control} placement="bottom-right" />
      ) : null}
      <Content>
        <Form
          onSubmit={handleSubmit(({ gridSize, players, theme }) => {
            localStorage.setItem('gridSize', gridSize);
            localStorage.setItem('players', players);
            localStorage.setItem('theme', theme);
            router.push('/game');
          })}
        >
          <Fieldset id="theme">
            <Legend>Select Theme</Legend>
            <RadioButtonsGroup>
              <RadioButton
                name="theme"
                label="Numbers"
                id="numbers"
                value="numbers"
                checked={fields.theme === 'numbers'}
                {...register('theme')}
              />
              <RadioButton
                name="theme"
                label="Icons"
                id="icons"
                value="icons"
                checked={fields.theme === 'icons'}
                {...register('theme')}
              />
            </RadioButtonsGroup>
          </Fieldset>
          <Fieldset id="players">
            <Legend>Number of Players</Legend>
            <RadioButtonsGroup>
              <RadioButton
                name="players"
                label="1"
                id="1"
                value="1"
                checked={fields.players === '1'}
                {...register('players')}
              />
              <RadioButton
                name="players"
                label="2"
                id="2"
                value="2"
                checked={fields.players === '2'}
                {...register('players')}
              />
              <RadioButton
                name="players"
                label="3"
                id="3"
                value="3"
                checked={fields.players === '3'}
                {...register('players')}
              />
              <RadioButton
                name="players"
                label="4"
                id="4"
                value="4"
                checked={fields.players === '4'}
                {...register('players')}
              />
            </RadioButtonsGroup>
          </Fieldset>
          <Fieldset id="grid-size">
            <Legend>Grid Size</Legend>
            <RadioButtonsGroup>
              <RadioButton
                name="grid-size"
                label="4x4"
                id="4x4"
                value="4"
                checked={fields.gridSize === '4'}
                {...register('gridSize')}
              />
              <RadioButton
                name="grid-size"
                label="6x6"
                id="6x6"
                value="6"
                checked={fields.gridSize === '6'}
                {...register('gridSize')}
              />
            </RadioButtonsGroup>
          </Fieldset>
          <SubmitButton type="submit">Start Game</SubmitButton>
        </Form>
      </Content>
    </StyledPage>
  );
}

export default Index;
