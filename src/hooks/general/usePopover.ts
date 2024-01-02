import { useState } from "react"

export const usePopover = <T = HTMLButtonElement>() => {
  const [anchorEl, setAnchorEl] = useState<T | null>(null)

  const handleClick = (event: React.MouseEvent<T>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  return { open, anchorEl, handleClick, handleClose }
}