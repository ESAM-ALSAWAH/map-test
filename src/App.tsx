import 'leaflet/dist/leaflet.css'
import Leaflet from '@/containers/LeafletContainer'
import ThemeProvider from '@/theme/ThemeProvider'
const App = () => {
  return (
    <ThemeProvider>
      <Leaflet />
    </ThemeProvider>
  )
}

export default App
