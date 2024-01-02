import { FullScreenButton } from '@/components/Leaflet/FullScreenButton'
import { LayersControl } from '@/components/Leaflet/LayersControl'
import { SettingsButton } from '@/components/Leaflet/SettingsButton'
import { ZoomButton } from '@/components/Leaflet/ZoomButton'
import { useLeaflet } from '@/hooks/useLeaflet'
import { Box, Stack } from '@mui/material'
import { MapContainer, TileLayer } from 'react-leaflet'

const Leaflet = () => {
  const {
    mapRef,
    containerMapRef,
    fullScreenMode,
    mapData,
    handleFullScreen,
    activeLayer,
    activeLayerId,
    handleLayerChange,
    handleZoomIn,
    handleZoomOut,
  } = useLeaflet()
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
        ref={mapRef}
        zoom={mapData.zoom}
        center={mapData.position}
        style={{ height: '100%', borderRadius: 16 }}
        zoomControl={false}
        boundsOptions={{}}
      >
        <TileLayer url={activeLayer?.url ?? ''} />
        <Stack
          direction="row"
          gap={2}
          sx={{ position: 'absolute', bottom: 10, left: 10, zIndex: 1000 }}
        >
          <ZoomButton
            handleZoomIn={handleZoomIn}
            handleZoomOut={handleZoomOut}
          />
          <LayersControl
            activeLayerId={activeLayerId}
            handleLayerChange={handleLayerChange}
          />
          <SettingsButton />
          <FullScreenButton handleFullScreen={handleFullScreen} />
        </Stack>
      </MapContainer>
    </Box>
  )
}

export default Leaflet
