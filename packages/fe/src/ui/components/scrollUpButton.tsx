import ArrowUpward from '@mui/icons-material/ArrowUpward'
import Fab from '@mui/material/Fab'
import Slide from '@mui/material/Slide'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import React, { FC, useCallback } from 'react'

export const ScrollUpButton: FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <Slide appear={true} direction="up" in={trigger}>
      <Fab
        onClick={scrollToTop}
        color="primary"
        size="small"
        aria-label="scroll back to top"
        sx={{ position: 'fixed', bottom: (theme) => theme.spacing(2), right: (theme) => theme.spacing(2) }}
      >
        <ArrowUpward />
      </Fab>
    </Slide>
  )
}
