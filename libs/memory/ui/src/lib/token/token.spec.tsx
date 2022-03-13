import { render } from '@testing-library/react';

import Token from './token';

describe('Token', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Token state={'MATCH'} />);
    expect(baseElement).toBeTruthy();
  });
  it('should display a value', () => {
    const { getByText } = render(<Token state={'MATCH'}>3</Token>);
    expect(getByText('3').textContent).toBe('3');
  });
  
});
