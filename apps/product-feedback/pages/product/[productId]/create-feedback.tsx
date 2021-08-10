import styled from 'styled-components';
import { Card, Button, Input } from '@sd/product-feedback-ui-components';
import { Stack, Center } from '@sd/react-layout-styled-components';
/* eslint-disable-next-line */
export interface CreateFeedbackProps {}

const StyledCreateFeedback = styled(Center)``;

const Form = styled.form``;
const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  & > * + * {
    margin-left: var(--flow);
  }
`;
export function CreateFeedback(props: CreateFeedbackProps) {
  return (
    <StyledCreateFeedback>
      <Card title="Create New Feedback" icon="+">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Stack>
            <Input
              id="feedback-title-field"
              label="Feedback Title"
              helperText="Add a short, descriptive headline"
            />
            <Input
              id="feedback-detail-field"
              label="Feedback Detail"
              helperText="Include any specific comments on what should be improved, added, etc."
            />
            <FormActions>
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary" type="submit">
                Add Feedback
              </Button>
            </FormActions>
          </Stack>
        </Form>
      </Card>
    </StyledCreateFeedback>
  );
}

export default CreateFeedback;
