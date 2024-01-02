import { TypographyOptions } from '@mui/material/styles/createTypography'

const typography: TypographyOptions = {
  fontFamily: '"Manrope", sans-serif',
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  allVariants: {
    letterSpacing: 0,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 24,
  },

  h2: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  h3: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  h4: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  h5: {
    fontWeight: '600',
    fontSize: 12,
  },
  body1: {
    fontWeight: 500,
    fontSize: 13,
  },
  body2: {
    fontWeight: 400,
    fontSize: 12,
  },
  button: {
    fontWeight: 600,
    fontSize: 12,
  },
}

export default typography
