import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '@sd/audiophile/shared';
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to audiophile!</title>
      </Head>
      <GlobalStyle />
      <div className="app">
        <header className="flex"></header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
