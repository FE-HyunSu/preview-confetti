import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { media } from '@styles/theme';
import GlobalStyle from '@styles/global-style';
import Header from '@views/Header';
import Footer from '@views/Footer';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <RecoilRoot>
        <Head>
          <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />
          <meta property="og:title" content="Confetti-Privew" />
          <meta property="og:description" content="Confetti-Privew" />
          <meta property="og:image" content="/images/img_meta.png" />
          <link rel="icon" href="/favicon.ico" />
          <title>🎉 Confetti-Privew</title>
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={media}>
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
