import { render } from '@testing-library/react';

import Input from './input';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Input
        label="Feedback Title"
        helperText={'Add a short, descriptive headline'}
        id="test"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
