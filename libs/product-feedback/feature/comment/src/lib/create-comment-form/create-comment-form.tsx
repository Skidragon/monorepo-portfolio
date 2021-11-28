import styled from 'styled-components';
import { Input, Button, Box } from '@sd/product-feedback-ui-components';
import { Stack } from '@sd/react-layout-styled-components';
import { useState } from 'react';
/* eslint-disable-next-line */
export interface CreateCommentFormProps {}

const StyledCreateCommentForm = styled(Box)`
  background: white;
`;
const CharactersLeft = styled.div``;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export function CreateCommentForm(props: CreateCommentFormProps) {
  const [comment, setComment] = useState('');
  const charactersUsed = comment.length;
  const maxCharacters = 250;
  const charactersLeft = maxCharacters - charactersUsed;
  return (
    <StyledCreateCommentForm>
      <h2>Add Comment</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Stack>
          <Input
            id="comment-field"
            label="Type your comment here"
            onChange={(e) => {
              if (e.target.value.length > maxCharacters) {
                return;
              }
              const { value } = e.target;
              setComment(value);
            }}
            maxLength={maxCharacters}
            minLength={1}
            spellCheck={true}
            autoCorrect={'off'}
            autoComplete={'off'}
            value={comment}
          />
          <Footer>
            <CharactersLeft>{`${charactersLeft} Characters Left`}</CharactersLeft>
            <Button variant="primary" type="submit">
              Post Comment
            </Button>
          </Footer>
        </Stack>
      </form>
    </StyledCreateCommentForm>
  );
}

export default CreateCommentForm;
