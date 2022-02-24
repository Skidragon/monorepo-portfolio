import { render } from '@testing-library/react';

import CreateFeedbackForm from './create-feedback-form';

describe('CreateFeedbackForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateFeedbackForm />);
    expect(baseElement).toBeTruthy();
  });
});
