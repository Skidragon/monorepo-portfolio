import { render } from '@testing-library/react';
import FormatPrice from './format-price';
describe('FormatPrice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormatPrice price={200} />);
    expect(baseElement).toBeTruthy();
  });
});
