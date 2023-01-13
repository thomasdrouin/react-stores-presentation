import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { FC, ReactNode } from 'react'

type AppThemeProviderProps = {
  readonly children: ReactNode
}

export const AppThemeProvider: FC<AppThemeProviderProps> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1972ca',
        light: '#1972ca',
        dark: '#1972ca',
        contrastText: '#fff',
      },
      secondary: {
        main: '#f44336',
        light: '#ff7961',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
    typography: {
      button: {
        textTransform: 'none',
        lineHeight: '90%',
        height: '37px',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
