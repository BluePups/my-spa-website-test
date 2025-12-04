'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: '#fce4ec',
        borderTop: '1px solid #f8bbd0',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              My Spa 🌸
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nơi vẻ đẹp thăng hoa. Chúng tôi cam kết mang lại trải nghiệm thư giãn và làm đẹp tuyệt vời nhất cho bạn.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Liên kết
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/services" style={{ textDecoration: 'none', color: '#757575' }}>Dịch vụ</Link>
              <Link href="/booking" style={{ textDecoration: 'none', color: '#757575' }}>Đặt lịch</Link>
              <Link href="/contact" style={{ textDecoration: 'none', color: '#757575' }}>Liên hệ</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Liên hệ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Địa chỉ: 123 Đường Hoa Hồng, Quận 1, TP.HCM
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hotline: 0909 123 456
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: contact@myspa.com
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} My Spa. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}