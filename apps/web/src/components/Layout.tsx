import Image from 'next/image'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react';
import Head from 'next/head';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={inter.className}>
      <Head>
        <title>farcaster kit</title>
        <meta name="description" content="the easiest way to build farcaster apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="title" content="farcaster kit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://farcasterkit.com/" />
        <meta property="og:title" content="farcaster kit" />
        <meta property="og:description" content="the easiest way to build farcaster apps" />
        <meta property="og:image" content="https://i.imgur.com/wBGSE0g.png" />
        <meta property="og:site_name" content="farcaster kit" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://farcasterkit.com/" />
        <meta name="twitter:title" content="farcaster kit" />
        <meta name="twitter:description" content="the easiest way to build farcaster apps" />
        <meta name="twitter:image" content="https://i.imgur.com/wBGSE0g.png" />
        <meta name="twitter:creator" content="@Dylan_Steck" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-XW9TS556EE" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XW9TS556EE');
        `}
      </Script>
      {children}
    </main>
  )
}
