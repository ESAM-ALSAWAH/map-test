import { FullScreenButton } from '@/components/Leaflet/FullScreenButton'
import { LayersControl } from '@/components/Leaflet/LayersControl'
import { useLeaflet } from '@/hooks/useLeaflet'
import { Box, Stack } from '@mui/material'
import { MapContainer, TileLayer } from 'react-leaflet'

const Leaflet = () => {
  const {
    containerMapRef,
    fullScreenMode,
    mapData,
    handleFullScreen,
    activeLayer,
    activeLayerId,
    handleLayerChange,
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
          <FullScreenButton handleFullScreen={handleFullScreen} />
          <LayersControl
            activeLayerId={activeLayerId}
            handleLayerChange={handleLayerChange}
          />
        </Stack>
      </MapContainer>
    </Box>
  )
}

export default Leaflet
