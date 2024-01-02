import ThemeProvider from '@/theme/ThemeProvider'
import Leaflet from '@/containers/LeafletContainer'
import { Box } from '@mui/material'
const App = () => {
  return (
    <ThemeProvider>
      <Box sx={{ p: '2%' }}>
        <Leaflet />
      </Box>
    </ThemeProvider>
  )
}

export default App
