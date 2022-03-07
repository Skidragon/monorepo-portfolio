import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '@sd/audiophile/shared';
import { CategoriesQuery } from '@sd/audiophile/types';
import axios from 'axios';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to audiophile!</title>
      </Head>
      <GlobalStyle />
      <div className="app">
        <header className="flex"></header>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default CustomApp;
