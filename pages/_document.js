import Document, { Html, Head, Main, NextScript } from 'next/document'
import './app.css';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <title>Joseph Li | Designer Developer</title>
        </Head>
        <body>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet"/>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument