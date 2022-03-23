import { render } from '@testing-library/react';

import DownloadLinkButton from './download-link-button';

describe('DownloadLinkButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DownloadLinkButton />);
    expect(baseElement).toBeTruthy();
  });
});
