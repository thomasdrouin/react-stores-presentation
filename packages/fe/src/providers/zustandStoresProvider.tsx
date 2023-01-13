import { createContext, FC, ReactNode, useContext } from 'react'
import { useStore } from 'zustand'

import { ItemClient } from '../clients/itemClient'
import { createItemStore, ItemStore } from '../zustandStore/itemStore'

type StoresProviderProps = {
  readonly children: ReactNode
  readonly itemClient: ItemClient
}

type ZustandStoresProviderContext = {
  useItemStore: () => ItemStore
}

const ZustandStoresContext = createContext<ZustandStoresProviderContext>({
  useItemStore: () => ({} as ItemStore),
})

export const ZustandStoresProvider: FC<StoresProviderProps> = ({ children, itemClient }) => {
  const useItemStore = () => useStore(createItemStore(itemClient))

  return <ZustandStoresContext.Provider value={{ useItemStore }}>{children}</ZustandStoresContext.Provider>
}

export const useZustandStores = (): ZustandStoresProviderContext => useContext(ZustandStoresContext)
