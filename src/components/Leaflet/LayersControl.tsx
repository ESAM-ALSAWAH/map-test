import {
  Avatar,
  IconButton,
  Popover,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material'
import LayersIcon from '@mui/icons-material/Layers'
import { baseLayers } from '@/hooks/leaflet/useLeaflet'
import { usePopover } from '@/hooks/general/usePopover'
export const LayersControl = ({
  activeLayerId,
  handleLayerChange,
}: {
  activeLayerId: number
  handleLayerChange: (id: number) => void
}) => {
  const { open, anchorEl, handleClick, handleClose } = usePopover()
  return (
    <>
      <Tooltip title="Change Map">
        <IconButton
          sx={{
            zIndex: 1000,
            bgcolor: 'white',
            border: '1px solid white',
            color: 'primary.main',

            ':hover': {
              bgcolor: 'white',
              border: '1px solid black',
            },
          }}
          onClick={handleClick}
        >
          <LayersIcon />
        </IconButton>
      </Tooltip>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Stack direction="row" gap={2} sx={{ p: 1 }}>
          {baseLayers.map((layer, index) => (
            <Stack
              key={layer.id}
              sx={{
                maxWidth: 80,
                alignItems: 'center',
                gap: 1,
                ...(index !== baseLayers.length - 1 && {
                  borderInlineEnd: `1px solid #ddd`,
                }),
                paddingInlineEnd: 1,
              }}
            >
              <Avatar
                src={layer.image}
                sx={{
                  border: `3px solid ${
                    layer.id === activeLayerId
                      ? 'rgb(76, 175, 80)'
                      : 'rgb(238, 238, 238)'
                  }`,
                  cursor: 'pointer',
                  width: 50,
                  height: 50,
                }}
                onClick={() => handleLayerChange(layer.id)}
              />
              <Typography
                variant="h5"
                sx={{ wordBreak: 'break-word', textAlign: 'center' }}
              >
                {layer.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Popover>
    </>
  )
}
