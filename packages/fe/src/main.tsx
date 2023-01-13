import React from 'react'
import { createRoot } from 'react-dom/client'

import { ItemClient } from './clients/itemClient'
import { Providers } from './providers/providers'
import { App } from './ui/app'

const start = async () => {
  const itemClient = new ItemClient()
  createRoot(document.getElementById('root')!).render(
    <Providers itemClient={itemClient}>
      <App />
    </Providers>
  )
}

start().then()
