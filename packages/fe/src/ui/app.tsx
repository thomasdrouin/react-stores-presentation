import Box from '@mui/material/Box'
import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from '../router/routes'
import { Home } from './pages/home'

export const App: FC = () => {
  return (
    <Box height="100vh" width="100%" display="flex" flexDirection="column">
      <Routes>
        <Route key={ROUTES.HOME.title} path={ROUTES.HOME.path} element={<Home />} />
      </Routes>
    </Box>
  )
}
