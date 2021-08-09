import styled from 'styled-components';
import { Stack, Center } from '@sd/react-layout-styled-components';
import { Box, Avatar, Button } from '@sd/product-feedback-ui-components';
import { ReplyForm } from '../reply-form/reply-form';
import { useState } from 'react';
/* eslint-disable-next-line */
const StyledComment = styled(Stack)``;
const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const User = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 1em;
`;
const UserInfo = styled.div`
  display: flex;
  flex-flow: column;
`;
const Username = styled.h3``;
const Handle = styled.h4``;
type CommentProps = {
  firstName: string;
  lastName: string;
  handle: string;
  comment: string;
};
const Comment: React.FunctionComponent<CommentProps> = ({
  firstName = 'Simon',
  lastName = 'Davis',
  handle = 'hexagon.bestagon',
  comment,
}) => {
  const name = `${firstName} ${lastName}`;
  const userHandle = `@${handle}`;
  const [showReplyForm, setShowReplyForm] = useState(false);
  return (
    <>
      <StyledComment>
        <CommentHeader>
          <User>
            <Avatar firstName={firstName} lastName={lastName} src="" />
            <UserInfo>
              <Username>{name}</Username>
              <Handle>{userHandle}</Handle>
            </UserInfo>
          </User>
          <Button
            isActive={showReplyForm}
            onClick={() => setShowReplyForm((prevState) => !prevState)}
          >
            Reply
          </Button>
        </CommentHeader>
        <p>{comment}</p>
      </StyledComment>
      {showReplyForm ? <ReplyForm /> : null}
    </>
  );
};
export interface CommentsProps {
  data: CommentProps[];
}
const StyledComments = styled(Box)`
  background: white;
`;
const Divider = styled.div`
  height: 3px;
  background: lightgrey;
  margin: 1rem 0;
`;
export function Comments(props: CommentsProps) {
  const commentsLength = props.data.length;
  return (
    <StyledComments>
      <Stack>
        <h2>{`${commentsLength} Comments`}</h2>
        {props.data.map((comment, index) => {
          if (index === commentsLength - 1) {
            return <Comment key={comment.handle} {...comment} />;
          }
          return (
            <div key={comment.handle}>
              <Comment {...comment} />
              <Divider />
            </div>
          );
        })}
      </Stack>
    </StyledComments>
  );
}
export default Comments;
