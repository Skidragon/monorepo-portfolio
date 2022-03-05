import React from 'react';
import { GlobalStyle } from '@sd/audiophile/shared';
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
