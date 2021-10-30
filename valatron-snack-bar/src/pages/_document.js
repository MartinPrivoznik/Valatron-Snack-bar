import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="title" content="Valatron - Snack bar" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Valatron - Snack bar" />
          <meta property="og:image" content="/logo512.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Valatron - Snack bar" />
          <meta property="twitter:image" content="/logo512.png" />

          <link rel="icon" href="/favicon.ico"></link>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
