import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { CenterContainer } from '../components/centerContainer'
import { GoToHomeButton } from '../components/goToHomeButton'

export const NotFound: FC = () => {
  const { t } = useTranslation()
  return (
    <CenterContainer>
      <Typography>{t('notFound')}</Typography>
      <GoToHomeButton></GoToHomeButton>
    </CenterContainer>
  )
}
