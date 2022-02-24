import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import { createGlobalStyle } from 'styled-components';
const media = {
  phone: '23.5em',
  tablet: '48em',
  desktop: '90em',
};
const GlobalStyle = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.3;
  font-family: sans-serif;
  margin: 0;

}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
:root {
 /* Spacing */
  --measure: 75ch;
  --ratio: 1.5;
  --s-5: calc(var(--s-4) / var(--ratio));
  --s-4: calc(var(--s-3) / var(--ratio));
  --s-3: calc(var(--s-2) / var(--ratio));
  --s-2: calc(var(--s-1) / var(--ratio));
  --s-1: calc(var(--s0) / var(--ratio));
  --s0: 1rem;
  --s1: calc(var(--s0) * var(--ratio));
  --s2: calc(var(--s1) * var(--ratio));
  --s3: calc(var(--s2) * var(--ratio));
  --s4: calc(var(--s3) * var(--ratio));
  --s5: calc(var(--s4) * var(--ratio));
  --flow: 1.5rem;
  /* Devices */
  --phone: 23.5em;
  --tablet: 48em;
  --desktop: 90em;
  /* Design System Colors */
  --color-primary: #AD1FEA;
  --color-secondary: #4661E6;
  --color-tertiary: #4661E6;
  --gradient-primary: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
}
html {

  --color-background-page: #F7F8FD;
  background: var(---color---color-background-page);

  body {
    font-family: 'Manrope', sans-serif;
    /* Default Typography */
    font-size: .75rem;
    @media screen and (min-width: ${media.tablet}) {
      font-size: 1rem;
    }
    line-height: 1.75;
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: bold;
  }
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1.1em;
  }
  h4 {
    font-weight: bold;
    font-size: .9em;
  }
}
`;

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to product-feedback!</title>
      </Head>
      <GlobalStyle />
      <div className="app">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
