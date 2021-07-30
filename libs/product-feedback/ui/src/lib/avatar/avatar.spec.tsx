import { render } from '@testing-library/react';

import Avatar from './avatar';

describe('Avatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Avatar firstName={'Simon'} lastName={'Davis'} src="" />
    );
    expect(baseElement).toBeTruthy();
  });
});
