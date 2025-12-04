import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BookingForm from '@/components/BookingForm';

export default function BookingPage() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box sx={{ my: 4 }}>
        <BookingForm />
      </Box>
    </Container>
  );
}
