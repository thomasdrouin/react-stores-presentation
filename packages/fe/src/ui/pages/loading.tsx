import CircularProgress from '@mui/material/CircularProgress'
import { SxProps, Theme } from '@mui/material/styles'
import React, { FC } from 'react'

import { CenterContainer } from '../components/centerContainer'

export const Loading: FC<{ sx?: SxProps<Theme> }> = ({ sx }) => {
  return (
    <CenterContainer sx={{ ...sx }}>
      <CircularProgress />
    </CenterContainer>
  )
}
