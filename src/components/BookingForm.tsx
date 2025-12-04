'use client';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const services = [
  { value: 'skin-care', label: 'Chăm sóc da mặt cơ bản' },
  { value: 'massage', label: 'Massage toàn thân' },
  { value: 'acne', label: 'Điều trị mụn chuyên sâu' },
  { value: 'white', label: 'Tắm trắng thảo dược' },
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    datetime: '',
    note: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Data:', formData);
    setOpenSnackbar(true);
    // Reset form
    setFormData({ name: '', phone: '', service: '', datetime: '', note: '' });
  };

  return (
    <Paper 
      elevation={6} 
      sx={{ 
        p: 4, 
        borderRadius: 4, 
        background: 'linear-gradient(135deg, #fff 0%, #fce4ec 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box sx={{ position: 'absolute', top: -50, right: -50, width: 100, height: 100, borderRadius: '50%', background: 'rgba(244, 143, 177, 0.3)' }} />
      
      <Typography variant="h4" component="h2" gutterBottom align="center" color="primary" sx={{ fontWeight: 'bold', mb: 3 }}>
        Đặt Lịch Hẹn ✨
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          fullWidth
          label="Họ và tên"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
          sx={{ '& .MuiOutlinedInput-root.Mui-focused': { boxShadow: '0 0 10px rgba(244, 143, 177, 0.5)' } }}
        />
        
        <TextField
          fullWidth
          label="Số điện thoại"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
          required
          type="tel"
          sx={{ '& .MuiOutlinedInput-root.Mui-focused': { boxShadow: '0 0 10px rgba(244, 143, 177, 0.5)' } }}
        />

        <TextField
          select
          fullWidth
          label="Chọn dịch vụ"
          name="service"
          value={formData.service}
          onChange={handleChange}
          margin="normal"
          required
          sx={{ '& .MuiOutlinedInput-root.Mui-focused': { boxShadow: '0 0 10px rgba(244, 143, 177, 0.5)' } }}
        >
          {services.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          fullWidth
          name="datetime"
          label="Ngày giờ hẹn"
          type="datetime-local"
          value={formData.datetime}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
          sx={{ '& .MuiOutlinedInput-root.Mui-focused': { boxShadow: '0 0 10px rgba(244, 143, 177, 0.5)' } }}
        />

        <TextField
          fullWidth
          label="Ghi chú thêm"
          name="note"
          value={formData.note}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={3}
          sx={{ '& .MuiOutlinedInput-root.Mui-focused': { boxShadow: '0 0 10px rgba(244, 143, 177, 0.5)' } }}
        />

        <Button 
          type="submit" 
          variant="contained" 
          size="large" 
          fullWidth 
          sx={{ 
            mt: 4, 
            py: 1.5,
            fontSize: '1.1rem',
            background: 'linear-gradient(45deg, #ec407a 30%, #ab47bc 90%)',
            boxShadow: '0 3px 5px 2px rgba(236, 64, 122, .3)'
          }}
        >
          Xác nhận đặt lịch
        </Button>
      </Box>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Đặt lịch thành công! Chúng tôi sẽ liên hệ sớm.
        </Alert>
      </Snackbar>
    </Paper>
  );
}