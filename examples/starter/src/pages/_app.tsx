import { FarcasterKitProvider } from 'farcasterkit'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <FarcasterKitProvider>
    <Component {...pageProps} />
  </FarcasterKitProvider>
  )
}