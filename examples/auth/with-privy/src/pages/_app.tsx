import { FarcasterKitProvider } from '../providers/FarcasterKitProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { PrivyProvider } from '@privy-io/react-auth'
import { PrivyWagmiConnector } from '@privy-io/wagmi-connector';
import { configureChains } from 'wagmi';
import { optimism } from 'viem/chains';
import { publicProvider } from 'wagmi/providers/public';

const FARCASTER_KIT_LOGO = "https://i.imgur.com/m7ZSxtn.png";

const configureChainsConfig = configureChains([optimism], [publicProvider()]);

export default function App({ Component, pageProps }: AppProps) {

  const handleLogin = (user) => {
    console.log(user);
  }

  return (
  <FarcasterKitProvider>
    <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID ?? ''}
        onSuccess={handleLogin}
        config={{
          loginMethods: ['email', 'wallet'],
          appearance: {
            theme: 'light',
            accentColor: '#8A63D2',
            logo: FARCASTER_KIT_LOGO,
          },
          defaultChain: optimism,
          supportedChains: [optimism]
        }}
      >
        <PrivyWagmiConnector wagmiChainsConfig={configureChainsConfig}>
          <Component {...pageProps} />
        </PrivyWagmiConnector>
    </PrivyProvider>
  </FarcasterKitProvider>
  )
}