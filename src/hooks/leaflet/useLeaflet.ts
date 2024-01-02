
import { useEffect, useMemo, useRef, useState } from 'react'
import { MapContainerProps, } from 'react-leaflet'
import osmImage from '@/assets/osm.png'
import googleImage from '@/assets/google.png'
import googleSatelliteImage from '@/assets/googleSatellite.png'
import { Map } from 'leaflet'
import L from 'leaflet'
import { mockMarkers, MarkerType } from '@/data/mockMarkers'
import { MAP_ZOM_VALUE } from '@/constants/appConstants'

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
    markers_grouping: boolean
    markers_ping: boolean
    markers: MarkerType[]

  }>({ position: [33.5074755, 36.2828954], zoom: 11, markers_grouping: true, markers_ping: true, markers: mockMarkers })

  const customIcon = (marker: MarkerType) => new L.DivIcon({
    className: 'custom-marker-icon',
    iconAnchor: [0, 20],
    html: `<div class="custom-marker-shadow" style="transform: rotate(${marker.rotate}deg);background-color:${marker.color};">
    
  </div>`,
  })


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

  const handleZoomIn = () => setMapData({ ...mapData, zoom: mapData.zoom + MAP_ZOM_VALUE })
  const handleZoomOut = () => setMapData({ ...mapData, zoom: mapData.zoom - MAP_ZOM_VALUE })

  const handleLayerChange = (id: number) => setActiveLayerId(id)

  const toggleGrouping = (grouping: boolean) => setMapData({ ...mapData, markers_grouping: grouping })
  return { mapRef, containerMapRef, fullScreenMode, mapData, toggleGrouping, handleFullScreen, activeLayer, handleLayerChange, activeLayerId, handleZoomOut, handleZoomIn, customIcon }
}