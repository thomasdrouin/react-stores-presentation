import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

import { Loading } from '../pages/loading'

export const LoadingBar: FC<{ percent: number }> = ({ percent }) => {
  return (
    <Stack direction={'row'} alignItems={'center'} display={'flex'} flex={1} width={'100%'}>
      <LinearProgress variant="determinate" value={Math.round(percent)} sx={{ width: '100%', mx: 3 }} />
      <Box width={'35px'}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(percent)}%`}</Typography>
      </Box>
      <Loading />
    </Stack>
  )
}
