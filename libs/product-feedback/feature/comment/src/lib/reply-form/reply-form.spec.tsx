import { render } from '@testing-library/react';

import ReplyForm from './reply-form';

describe('ReplyForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReplyForm />);
    expect(baseElement).toBeTruthy();
  });
});
