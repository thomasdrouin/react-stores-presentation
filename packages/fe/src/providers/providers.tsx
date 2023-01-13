import { FC, ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ItemClient } from '../clients/itemClient'
import { AppThemeProvider } from './appThemeProvider'
import { ZustandStoresProvider } from './zustandStoresProvider'

type ProvidersProps = {
  children: ReactNode
  itemClient: ItemClient
}

export const Providers: FC<ProvidersProps> = ({ children, itemClient }) => {
  return (
    <BrowserRouter>
      <ZustandStoresProvider itemClient={itemClient}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </ZustandStoresProvider>
    </BrowserRouter>
  )
}
