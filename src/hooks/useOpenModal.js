import { useState} from "react"

export const useOpenModal = () => {
    const [open, setOpen]=useState(false);
    const handleClose=() => setOpen(false);
    const handleOpen=() => setOpen(true);

    return {
        open,
        handleClose,
        handleOpen
    }
}