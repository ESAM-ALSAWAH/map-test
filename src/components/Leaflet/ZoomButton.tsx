import { Button, Stack, Tooltip } from '@mui/material'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import ZoomOutIcon from '@mui/icons-material/ZoomOut'
export const ZoomButton = ({
  handleZoomIn,
  handleZoomOut,
}: {
  handleZoomIn: () => void
  handleZoomOut: () => void
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        bgcolor: 'white',
        borderRadius: '50px',
        overflow: 'hidden',
      }}
    >
      <Tooltip title="Zoom In">
        <Button
          sx={{
            height: '100%',
            borderRight: '2px solid rgba(66, 70, 73, 0.5)',
            borderRadius: 0,
            color: '#757575',
          }}
          onClick={handleZoomIn}
          onDoubleClick={(e) => e.preventDefault()}
        >
          <ZoomInIcon sx={{ fontSize: 30 }} />
        </Button>
      </Tooltip>
      <Tooltip title="Zoom Out">
        <Button
          sx={{ height: '100%', color: '#757575', borderRadius: 0 }}
          onClick={handleZoomOut}
          onDoubleClick={(e) => e.preventDefault()}
        >
          <ZoomOutIcon sx={{ fontSize: 30 }} />
        </Button>
      </Tooltip>
    </Stack>
  )
}
