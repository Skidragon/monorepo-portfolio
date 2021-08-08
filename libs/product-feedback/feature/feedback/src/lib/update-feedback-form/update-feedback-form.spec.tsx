import { render } from '@testing-library/react';

import UpdateFeedbackForm from './update-feedback-form';

describe('UpdateFeedbackForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateFeedbackForm />);
    expect(baseElement).toBeTruthy();
  });
});
