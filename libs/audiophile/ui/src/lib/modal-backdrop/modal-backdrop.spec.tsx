import { render } from '@testing-library/react';

import ModalBackdrop from './modal-backdrop';

describe('ModalBackdrop', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModalBackdrop />);
    expect(baseElement).toBeTruthy();
  });
});
