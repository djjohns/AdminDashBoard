import React, { useState } from 'react';
import axios from 'axios';
import {
  Modal,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
} from '@mui/material';
import BasicDatePicker from '../../components/BasicDatePicker';

const NewInvoiceForm = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cost, setCost] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCostChange = (e) => setCost(e.target.value);
  const handleDateChange = (date) => setSelectedDate(date);

  // Function to normalize date to mm/dd/yyyy format
  const normalizeDate = (date) => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const handleSubmit = () => {
    const formattedDate = normalizeDate(selectedDate);
    const invoice_id = crypto.randomUUID()

    axios
      .post('http://localhost:3001/api/invoice', {
        invoice_id,
        name,
        phone,
        email,
        cost,
        selectedDate: formattedDate, // Use the formatted date
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((response) => response.data)
      .then(console.log('Form submitted:', invoice_id, name, phone, email, cost, formattedDate))
      .catch((error) => console.error('Error adding invoice:', error));

    // Close the modal
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Card>
        <CardHeader title="Create New Invoice" />
        <CardContent>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={handleNameChange}
            margin="normal"
          />
          <TextField
            label="Phone"
            fullWidth
            value={phone}
            onChange={handlePhoneChange}
            margin="normal"
          />
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            margin="normal"
          />
          <TextField
            label="Cost"
            fullWidth
            value={cost}
            onChange={handleCostChange}
            margin="normal"
          />
          <BasicDatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Create Invoice
          </Button>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default NewInvoiceForm;
