import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NewInvoiceForm from './NewInvoiceForm';

const AddInvoice = ({ refreshInvoices }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton title="Add Invoice" onClick={handleOpen}>
        <AddCircleIcon fontSize="large" />
      </IconButton>
      <NewInvoiceForm open={open} onClose={handleClose} refreshInvoices={refreshInvoices} />
    </div>
  );
};



export default AddInvoice;
