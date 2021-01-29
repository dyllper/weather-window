import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;

    --font-default: 1.8rem;
    --font-sm: 1.4rem;
    --font-md: 2.4rem;
    --font-lg: 3.1rem;
    --font-xlg: 4rem;
    --font-title: 5.4rem;

    --color-text: #000000;
    --color-glass: rgba(255, 255, 255, 0.3);
    --color-blue-dark: #3B69E0;
    --color-blue-light: #00BFFE;
    --color-orange: #EA6E4B;

    --spacing-sm: 1.8rem;
    --spacing-md: 2.7rem;
    --spacing-lg: 3.6rem;
    --spacing-xlg: 5.4rem;
  }

  body {
    height: 100vh;
    width: 100vw;
    font-family: 'Montserrat';
    font-size: var(--font-default);
  }

  a {
    text-decoration: none;
  }

  ul,ol {
    list-style: none;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
