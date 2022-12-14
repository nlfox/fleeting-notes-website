import { DefaultSeoProps } from "next-seo";

const description = "Take short-form notes at breakneck speeds and sync them with Obsidian. Then, build your network of ideas across all platforms."
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
  titleTemplate: "%s | Fleeting Notes",
  defaultTitle: "Fleeting Notes | Keep / Apple Notes with Backlinks",
  canonical: 'https://www.fleetingnotes.app/',
  description,
  
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    title: 'Fleeting Notes',
    description,
    url: 'https://www.fleetingnotes.app/',
    images: [{
      url: 'https://www.fleetingnotes.app/favicon/og-image.png',
      width: 1200,
      height: 787,
      alt: 'Og Image Alt',
    }]
  },
  twitter: {
    site: '@fleetingnotes_',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/32.png',
      sizes: '32x32'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon/16.png',
      sizes: '16x16'
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/180.png"
    },
    {
      rel: "shortcut icon",
      type: "image/png",
      href: "/favicon/196.png"
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }
  ]
};

export default config;