import { render } from '@testing-library/react';

import Button from './button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Test</Button>);
    expect(baseElement).toBeTruthy();
  });
  it('should have text', () => {
    const { baseElement } = render(<Button>Test</Button>);
    expect(baseElement.textContent).toBe('Test');
  });
  // it.todo('should have an icon', () => {});
});
