import theme from './theme'

import {
  ThemeProvider as MUIThemeProvider,
  responsiveFontSizes,
  CssBaseline,
} from '@mui/material'

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MUIThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}
