import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '@sd/audiophile/shared';

import { CartProvider } from 'react-use-cart';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to audiophile!</title>
      </Head>
      <GlobalStyle />
      <div className="app">
        <header className="flex"></header>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </div>
    </>
  );
}

export default CustomApp;
