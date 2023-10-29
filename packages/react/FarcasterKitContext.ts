import { createContext } from 'react'

export type FarcasterKitContextType = {
  signIn: () => Promise<void>
}

// eslint-disable-next-line @typescript-eslint/require-await
async function notInitialized() {
  throw new Error('Not initialized')
}

const FarcasterKitContext = createContext<FarcasterKitContextType>({
  signIn: notInitialized,
})

export default FarcasterKitContext