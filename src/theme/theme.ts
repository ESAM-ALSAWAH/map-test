import { createTheme } from '@mui/material'
import typography from './typography'

const primaryColor = '#424649'
const theme = createTheme({
  direction: 'ltr',
  typography,
  palette: {
    primary: {
      main: primaryColor,
    },
  },
})
export default theme
