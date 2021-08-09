import { useState } from 'react';
import { Stack, Center } from '@sd/react-layout-styled-components';
import styled from 'styled-components';
import { Feedback } from '@sd/product-feedback/feature/feedback';
import {
  Comments,
  CreateCommentForm,
} from '@sd/product-feedback/feature/comment';
/* eslint-disable-next-line */
export interface FeedbackDetailsProps {}

const StyledFeedbackDetails = styled(Stack)`
  padding: var(--flow);
`;

export function FeedbackDetails(props: FeedbackDetailsProps) {
  const [category, setCategory] = useState('All');
  return (
    <Center>
      <StyledFeedbackDetails>
        <Feedback
          title={'Add a dark theme option'}
          description={'It would help people like me with light sensitivities.'}
        />
        <Comments
          data={[
            {
              firstName: 'Elijah',
              lastName: 'Moss',
              handle: 'hexagon.bestagon',
              comment:
                'Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.',
              replies: [],
            },
            {
              firstName: 'James',
              lastName: 'Skinner',
              handle: 'hummingbird1',
              comment:
                'Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.',
              replies: [
                {
                  firstName: 'Anne',
                  lastName: 'Valentine',
                  handle: 'annex1990',
                  comment:
                    'While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.',
                  replies: [],
                },
              ],
            },
          ]}
        />
        <CreateCommentForm />
      </StyledFeedbackDetails>
    </Center>
  );
}

export default FeedbackDetails;
