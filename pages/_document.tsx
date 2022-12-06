import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/landing/footer'
import Header from '../components/landing/header'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Header />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  )
}
