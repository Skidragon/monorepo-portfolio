import styled from 'styled-components';
import { Stack, Center } from '@sd/react-layout-styled-components';
import { Box, Avatar, Button } from '@sd/product-feedback-ui-components';
import { ReplyForm } from '../reply-form/reply-form';
import { useState } from 'react';
/* eslint-disable-next-line */
const StyledComment = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.5em;
`;
const MainComment = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 0.5em;
`;
const CommentHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0.5em;
`;
const CommentText = styled.p``;
const UserInfo = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
const Username = styled.h3``;
const Handle = styled.h4``;
type CommentProps = {
  firstName: string;
  lastName: string;
  handle: string;
  comment: string;
  replies: ReplyProps[];
};
type ReplyProps = Exclude<CommentProps, 'replies'>;
const Comment: React.FunctionComponent<CommentProps> = ({
  firstName,
  lastName,
  handle,
  comment,
  replies = [],
}) => {
  const name = `${firstName} ${lastName}`;
  const userHandle = `@${handle}`;
  const [showReplyForm, setShowReplyForm] = useState(false);
  return (
    <>
      <StyledComment>
        <Avatar firstName={firstName} lastName={lastName} src="" />
        <MainComment>
          <CommentHeader>
            <UserInfo>
              <Username>{name}</Username>
              <Handle>{userHandle}</Handle>
            </UserInfo>
            <Button
              onClick={() => {
                setShowReplyForm((prevState) => !prevState);
              }}
              isActive={showReplyForm}
            >
              Reply
            </Button>
          </CommentHeader>
          <CommentText>{comment}</CommentText>
          {showReplyForm ? <ReplyForm handle={handle} /> : null}
        </MainComment>
      </StyledComment>
      <div
        style={{
          width: '90%',
          marginLeft: 'auto',
        }}
      >
        {replies.map((reply) => {
          return <Comment key={reply.handle} {...reply} />;
        })}
      </div>
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
  const totalCommentsAndReplies = props.data.reduce((total, comment) => {
    return total + 1 + comment.replies.length;
  }, 0);
  const totalComments = props.data.length;
  return (
    <StyledComments>
      <Stack>
        <h2>{`${totalCommentsAndReplies} Comments`}</h2>
        {props.data.map((comment, index) => {
          const isLastComment = index === totalComments - 1;
          if (isLastComment) {
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
