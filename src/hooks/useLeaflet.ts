
import { type Map } from 'leaflet'
import { useEffect, useRef, useState } from 'react'
import { MapContainerProps } from 'react-leaflet'

export const useLeaflet = () => {
  const containerMapRef = useRef<HTMLDivElement>(null)
  const [fullScreenMode, setFullScreenMode] = useState(false)
  const [mapData, setMapData] = useState<{
    position: MapContainerProps['center']
    zoom: number
  }>({ position: [51.505, -0.09], zoom: 10 })
  useEffect(() => {
    const handleFullScreenChange = () => {
      setFullScreenMode(document.fullscreenElement !== null)
    }

    document.addEventListener('fullscreenchange', handleFullScreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
    }
  }, [])

  const handleFullScreen = () => {
    const container = containerMapRef.current

    if (!container) return

    if (fullScreenMode) {
      document.exitFullscreen().then(() => setFullScreenMode(false))
    } else {
      container.requestFullscreen().then(() => setFullScreenMode(true))
    }
  }
  return { containerMapRef, fullScreenMode, mapData, handleFullScreen }
}