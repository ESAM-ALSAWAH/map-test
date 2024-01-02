import { IconButton, Tooltip } from '@mui/material'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
export const FullScreenButton = ({
  handleFullScreen,
}: {
  handleFullScreen: () => void
}) => {
  return (
    <Tooltip title="Full Screen">
      <IconButton
        sx={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          zIndex: 1000,
          bgcolor: 'white',
          border: '1px solid white',

          ':hover': {
            bgcolor: 'white',
            border: '1px solid black',
          },
        }}
        onClick={handleFullScreen}
      >
        <FullscreenIcon />
      </IconButton>
    </Tooltip>
  )
}
