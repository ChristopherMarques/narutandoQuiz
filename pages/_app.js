/* eslint-disable react/jsx-props-no-spreading */
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React from 'react';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  /* New styles */
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.contrastText};
}
html, body {
  min-height: 100vh;
}

body,
input,
button,
select,
textarea {
  font-family: 'Lato', sans-serif;
}


#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>

        <title>Narutando Quiz</title>
        <meta name="title" content="Narutando Quiz" />
        <meta name="description" content="Quiz sobre o Anime Naruto." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="Narutando Quiz" />
        <meta property="og:description" content="Quiz sobre o Anime Naruto." />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={db.theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
