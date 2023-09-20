import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,"rewardful");
          `,
        }}
      ></script>
        <script async src="https://r.wdfl.co/rw.js" data-rewardful="bbc0a9"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
