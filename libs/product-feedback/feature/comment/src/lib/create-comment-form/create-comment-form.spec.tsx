import { render } from '@testing-library/react';

import CreateCommentForm from './create-comment-form';

describe('CreateCommentForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CreateCommentForm />);
    expect(baseElement).toBeTruthy();
  });
});
