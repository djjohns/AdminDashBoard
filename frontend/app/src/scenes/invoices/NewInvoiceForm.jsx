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

  const handleSubmit = () => {
    axios.post("http://localhost:3001/api/invoice", {
      invoice_id: crypto.randomUUID(),
      name,
      phone,
      email,
      cost,
      selectedDate
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then((response) => response.data)
    .then(console.log('Form submitted:', name, phone, email, cost, selectedDate))
    .catch((error) => console.error("Error adding invoice:", error));
    

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
