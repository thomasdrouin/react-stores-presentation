import { Item } from '@food-presto/common'
import { createStore } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { ItemClient } from '../clients/itemClient'

export type ItemStore = {
  items: Item[]
  refetchItems: () => Promise<void>
}

export const createItemStore = (itemClient: ItemClient) =>
  createStore<ItemStore>()(
    immer(
      devtools(
        persist(
          (set) => ({
            items: [],
            refetchItems: async () => {
              const refreshedItems = await itemClient.getItems()
              set((state) => {
                state.items = refreshedItems
              })
            },
          }),
          {
            name: 'zustand-items',
          }
        )
      )
    )
  )
