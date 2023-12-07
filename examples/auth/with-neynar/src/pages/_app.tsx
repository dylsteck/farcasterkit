import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NeynarProvider } from '../providers/NeynarProvider'

// export default function App({ Component, pageProps }: AppProps) {
//   return 
//   <NeynarProvider>
//     <Component {...pageProps} />
//   </NeynarProvider>
// }


export default function App({ Component, pageProps }: AppProps) {
  return (
    <NeynarProvider>
      <Component {...pageProps} />
    </NeynarProvider>
  );
}
