import { useRef, useState, useEffect } from 'react'
import { FullScreenButton } from '@/components/Leaflet/FullScreenButton'
import { useLeaflet } from '@/hooks/useLeaflet'
import { Box } from '@mui/material'
import { MapContainer, TileLayer } from 'react-leaflet'

const Leaflet = () => {
  const { containerMapRef, fullScreenMode, mapData, handleFullScreen } =
    useLeaflet()
  return (
    <Box
      ref={containerMapRef}
      sx={{
        height: fullScreenMode ? '100vh' : 500,
        borderRadius: 16,
        position: 'relative',
      }}
    >
      <MapContainer
        zoom={mapData.zoom}
        center={mapData.position}
        style={{ height: '100%', borderRadius: 16 }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FullScreenButton handleFullScreen={handleFullScreen} />
      </MapContainer>
    </Box>
  )
}

export default Leaflet
