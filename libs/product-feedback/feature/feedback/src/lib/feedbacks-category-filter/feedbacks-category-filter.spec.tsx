import { render } from '@testing-library/react';

import FeedbacksCategoryFilter from './feedbacks-category-filter';

describe('FeedbacksCategoryFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeedbacksCategoryFilter />);
    expect(baseElement).toBeTruthy();
  });
});
