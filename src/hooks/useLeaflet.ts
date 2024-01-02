
import { useEffect, useMemo, useRef, useState } from 'react'
import { MapContainerProps, useMap } from 'react-leaflet'
import osmImage from '@/assets/osm.png'
import googleImage from '@/assets/google.png'
import googleSatelliteImage from '@/assets/googleSatellite.png'
import { Map } from 'leaflet'

export const baseLayers = [
  {
    id: 1,
    name: 'OpenStreetMap',
    url: 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
    image: osmImage,
  },
  {
    id: 2,
    name: 'Google Maps',
    url: 'https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}',
    image: googleImage,
  },
  {
    id: 3,
    name: 'Google Map Satellite',
    url: 'https://www.google.com/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}',
    image: googleSatelliteImage
  },
];
export const useLeaflet = () => {

  const mapRef = useRef<Map>(null)
  const containerMapRef = useRef<HTMLDivElement>(null)
  const [activeLayerId, setActiveLayerId] = useState(1)
  const activeLayer = useMemo(() => baseLayers?.find((layer) => layer.id === activeLayerId), [activeLayerId])
  const [fullScreenMode, setFullScreenMode] = useState(false)
  const [mapData, setMapData] = useState<{
    position: MapContainerProps['center']
    zoom: number
  }>({ position: [33.5074755, 36.2828954], zoom: 15 })
  useEffect(() => {
    const handleFullScreenChange = () => {
      setFullScreenMode(document.fullscreenElement !== null)
    }

    document.addEventListener('fullscreenchange', handleFullScreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
    }
  }, [])
  useEffect(() => {
    mapRef.current?.setZoom(mapData.zoom)
  }, [mapData.zoom])

  const handleFullScreen = () => {
    const container = containerMapRef.current

    if (!container) return

    if (fullScreenMode) {
      document.exitFullscreen().then(() => setFullScreenMode(false))
    } else {
      container.requestFullscreen().then(() => setFullScreenMode(true))
    }
  }

  const handleZoomIn = () => setMapData({ ...mapData, zoom: mapData.zoom + 1 })
  const handleZoomOut = () => setMapData({ ...mapData, zoom: mapData.zoom - 1 })

  const handleLayerChange = (id: number) => setActiveLayerId(id)
  return { mapRef, containerMapRef, fullScreenMode, mapData, handleFullScreen, activeLayer, handleLayerChange, activeLayerId, handleZoomOut, handleZoomIn }
}