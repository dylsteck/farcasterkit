import type { ReactNode } from 'react'
import FarcasterKitContext from './FarcasterKitContext'

type FarcasterKitProviderContext = {
  children: ReactNode
}

export default function FarcasterKitProvider({ children }: FarcasterKitProviderContext) {

  // const signIn = useCallback(async () => {
  //   setIsLoading(true)
  //   setSigner(null)

  //   const response = await fetch(api, { method: 'POST' })
  //   const signer = (await response.json()) as Signer

  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(signer))
  //   setIsLoading(false)
  //   setSigner(signer)
  // }, [api])

  return (
    <FarcasterKitContext.Provider value={{  }}>
      {children}
    </FarcasterKitContext.Provider>
  )
}