import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      queryFn: async () => {
        try {
          const { data } = await axios.get(
            `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
          );
          return data;
        } catch (err) {
          throw new Error(err);
        }
      },
    },
  },
});
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
  --phone: ${media.phone};
  --tablet: ${media.tablet};
  --desktop: ${media.desktop};
}
html {

  body {
    font-family: 'Jost', sans-serif;
    /* Default Typography */
    font-size: .75rem;

    line-height: 1.25;
  }
  blockquote {
      &::before {
      content: open-quote;
    }
    &::after {
      content: close-quote;
    }
  }
}
`;
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Advice Generator</title>
      </Head>
      <GlobalStyle />
      <div className="app">
        <header className="flex"></header>
        <main>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </main>
      </div>
    </>
  );
}

export default CustomApp;
