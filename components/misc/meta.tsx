import Head from 'next/head'
import Script from "next/script"

const Meta = () => {
  const titleText = `${process.env.NEXT_PUBLIC_TITLE} | ${process.env.NEXT_PUBLIC_TAGLINE}`
  return (
    <Head>
      {/* Google tag (gtag.js) */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG_ID}`}></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GTAG_ID}', {
              page_path: window.location.pathname,
            });
        `,}}
      />
      {/* END of Google tag (gtag.js) */}

      {/* Meta tags */}
      <title>{titleText}</title>
      <meta name="author" content="Matthew Wong" />
      <meta name="description" content={process.env.NEXT_PUBLIC_DESCRIPTION} />
      <meta property="og:title" content={process.env.NEXT_PUBLIC_TITLE}/>
      <meta name="og:description" content={process.env.NEXT_PUBLIC_DESCRIPTION} />
      <meta property="og:image" content="assets/multi-platform.png" />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_TITLE}/>
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:title" content={process.env.NEXT_PUBLIC_TAGLINE} />
      <meta name="twitter:description" content={process.env.NEXT_PUBLIC_DESCRIPTION} />
      <meta property="twitter:image" content="assets/multi-platform.png" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/16.png"
      />
      <link rel="shortcut icon" type="image/png" href="/favicon/196.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </Head>
  )
}

export default Meta
