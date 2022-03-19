import { GlobalStyle } from '@sd/memory/shared';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faAnchor,
  faAppleWhole,
  faBasketball,
  faBahai,
  faBicycle,
  faBomb,
  faBrain,
  faBurger,
  faFire,
  faWater,
  faEarth,
  faAddressBook,
  faHandsClapping,
  faTrailer,
  faCar,
  faCalendarWeek,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
library.add(
  faCoffee,
  faAnchor,
  faAppleWhole,
  faBasketball,
  faBahai,
  faBicycle,
  faBomb,
  faBrain,
  faBurger,
  faFire,
  faWater,
  faEarth,
  faAddressBook,
  faHandsClapping,
  faTrailer,
  faCar,
  faCalendarWeek,
  faCode
);
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Memory</title>
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
