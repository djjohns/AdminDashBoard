import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, Typography, useTheme } from "@mui/material";
import Modal from '@mui/material/Modal';
import { tokens } from '../theme';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: colors.greenAccent[300],
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    };


  return (
    <div>
        <AddCircleIcon titleAccess='Add Invoice' fontSize='large' onClick={handleOpen} />
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Placeholder for card component that will contain a form for adding a new Invoice
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}