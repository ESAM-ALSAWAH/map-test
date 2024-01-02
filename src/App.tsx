import ThemeProvider from '@/theme/ThemeProvider'
import Leaflet from '@/containers/LeafletContainer'
const App = () => {
  return (
    <ThemeProvider>
      <Leaflet />
    </ThemeProvider>
  )
}

export default App
