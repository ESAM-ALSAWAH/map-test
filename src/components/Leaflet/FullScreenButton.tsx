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
