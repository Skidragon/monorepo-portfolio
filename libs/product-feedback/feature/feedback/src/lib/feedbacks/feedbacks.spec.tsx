import { render } from '@testing-library/react';

import Feedbacks from './feedbacks';

describe('Feedbacks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Feedbacks data={[]} loading={false} />);
    expect(baseElement).toBeTruthy();
  });
});
