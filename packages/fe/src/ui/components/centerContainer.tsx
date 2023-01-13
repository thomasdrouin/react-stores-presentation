import Box from '@mui/material/Box'
import { SxProps, Theme } from '@mui/material/styles'
import React, { FC, ReactNode } from 'react'

export const CenterContainer: FC<{ children: ReactNode; sx?: SxProps<Theme> }> = ({ children, sx }) => {
  return (
    <Box display="flex" flex={1} justifyContent="center" alignItems="center" flexDirection="column" sx={{ ...sx }}>
      {children}
    </Box>
  )
}
