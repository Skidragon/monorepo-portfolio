import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

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
  --phone: 23em;
  --tablet: 48em;
  --desktop: 90em;
  --cyan: #5FB4A2;
  --dark-blue: #203A4C;
  --grayish-dark-blue: #33323D;
  --very-light-gray: #FAFAFA;
  --light-gray: #EAEAEB;
  --error-clr: #F43030;
}
html {
  --color-background-page: #F7F8FD;
  background: var(--color-background-page);

  body {
    font-family: 'Jost', sans-serif;
    /* Default Typography */
    font-size: 1rem;

    line-height: 1.5;
    color: var(--grayish-dark-blue);

  }
}
h1,h2,h3,h4,h5,h6 {
  line-height: 1.15;
  margin-bottom: 1.5rem;
  font-family: 'Ibarra Real Nova', serif;
}
image {
  display: inline-block;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.8rem;
}
a {
  all: unset;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
}
section {
  padding: 1em;
  max-width: 80ch;
  margin: 0 auto;
}
section + section, footer {
  margin-top: 4em;
}
section > * + * {
  margin-top: 1rem;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
button {
  all: unset;
  cursor: pointer;
  &:focus {
-webkit-box-shadow: 0px 0px 0px 2px rgba(255,157,0,1);
-moz-box-shadow: 0px 0px 0px 2px rgba(255,157,0,1);
box-shadow: 0px 0px 0px 2px rgba(255,157,0,1);
Copy Text
  }
`;
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
