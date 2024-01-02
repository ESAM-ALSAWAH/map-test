import { Box, Stack } from '@mui/material'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import {
  FullScreenButton,
  LayersControl,
  SettingsButton,
  ZoomButton,
} from '@/components'
import { useLeaflet } from '@/hooks/leaflet/useLeaflet'

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
    toggleGrouping,
    handleZoomIn,
    handleZoomOut,
    customIcon,
  } = useLeaflet()

  const renderMarkers = mapData.markers_grouping ? (
    <MarkerClusterGroup chunkedLoading>
      {mapData.markers?.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          icon={customIcon(marker)}
        />
      ))}
    </MarkerClusterGroup>
  ) : (
    mapData.markers?.map((marker, index) => (
      <Marker
        key={index}
        position={marker.position}
        icon={customIcon(marker)}
      />
    ))
  )
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
        {renderMarkers}
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
          <SettingsButton toggleGrouping={toggleGrouping} />
          <FullScreenButton handleFullScreen={handleFullScreen} />
        </Stack>
      </MapContainer>
    </Box>
  )
}

export default Leaflet
