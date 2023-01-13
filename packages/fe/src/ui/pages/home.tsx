import { Item } from '@food-presto/common'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React, { FC, useEffect } from 'react'

import { useZustandStores } from '../../providers/zustandStoresProvider'
import { CenterContainer } from '../components/centerContainer'

export const Home: FC = () => {
  const { useItemStore } = useZustandStores()

  const { items: zustandItems, refetchItems: refreshZustandItems } = useItemStore()

  useEffect(() => {
    void refreshZustandItems()
  }, [])

  return (
    <CenterContainer>
      <ItemList items={zustandItems} />
    </CenterContainer>
  )
}

const ItemList: FC<{ items: Item[] }> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Stack direction={'row'} key={item.id}>
          <Typography>{item.name}</Typography>
          <Typography>{item.name}</Typography>
        </Stack>
      ))}
    </>
  )
}
