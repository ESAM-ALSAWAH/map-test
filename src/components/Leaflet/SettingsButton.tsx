import {
  FormControlLabel,
  IconButton,
  Popover,
  Stack,
  Switch,
  Tooltip,
} from '@mui/material'
import { usePopover } from '@/hooks/general/usePopover'
import SettingsIcon from '@mui/icons-material/Settings'
export const SettingsButton = ({
  toggleGrouping,
  togglePing,
}: {
  toggleGrouping: () => void
  togglePing: () => void
}) => {
  const { open, anchorEl, handleClick, handleClose } = usePopover()
  return (
    <>
      <Tooltip title="Settings">
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
        <Stack gap={1} sx={{ p: 1 }}>
          <FormControlLabel
            control={<Switch defaultChecked />}
            onChange={toggleGrouping}
            label="Markers Grouping"
            slotProps={{
              typography: {
                variant: 'body1',
              },
            }}
          />
          <FormControlLabel
            control={<Switch defaultChecked />}
            onChange={togglePing}
            label="Markers Ping Angle"
            slotProps={{
              typography: {
                variant: 'body1',
              },
            }}
          />
        </Stack>
      </Popover>
    </>
  )
}
