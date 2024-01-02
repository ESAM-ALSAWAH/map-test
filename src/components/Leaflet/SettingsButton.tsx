import { IconButton, Popover, Stack, Tooltip } from '@mui/material'
import { usePopover } from '@/hooks/general/usePopover'
import SettingsIcon from '@mui/icons-material/Settings'
export const SettingsButton = ({}: {}) => {
  const { open, anchorEl, handleClick, handleClose } = usePopover()
  return (
    <>
      <Tooltip title="Settings">
        <IconButton
          sx={{
            zIndex: 1000,
            bgcolor: 'white',
            border: '1px solid white',

            ':hover': {
              bgcolor: 'white',
              border: '1px solid black',
            },
          }}
          onClick={handleClick}
        >
          <SettingsIcon />
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
        <Stack direction="row" gap={2} sx={{ p: 1 }}></Stack>
      </Popover>
    </>
  )
}
