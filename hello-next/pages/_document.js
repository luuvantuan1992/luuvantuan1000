import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://code.jquery.com/jquery-3.4.1.min.js"
          />
          <link
            rel="shortcut icon"
            type="image/png"
            href="./images/favicon.png"
          />
          <link rel="stylesheet" href="css/fontawesome.css" />
          <link rel="stylesheet" href="css/owl.css" />
          <link rel="stylesheet" href="css/flex-slider.css" />
          <link rel="stylesheet" href="css/tooplate-main.css" />
          <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.css" />
          <link rel="stylesheet" hred="css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
