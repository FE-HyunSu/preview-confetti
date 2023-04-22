import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/svg" />
          <meta property="og:title" content="꽃가루를 날려" />
          <meta property="og:image" content="/images/img_meta.png" />
          <meta property="og:description" content="개발-디자인 협업용 Confetti-Privew" />
          <meta property="og:url" content="https://flytheflowers.vercel.app" />
          <meta name="description" content="개발-디자인 협업용 Confetti-Privew" />
          <meta name="keywords" content="꽃가루를 날려" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="preload"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <div id="_modal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
