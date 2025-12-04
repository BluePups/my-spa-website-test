import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom color="primary" sx={{ mb: 6, fontWeight: 'bold' }}>
        Liên Hệ Với Chúng Tôi
      </Typography>

      <Grid container spacing={6}>
        {/* Thông tin liên hệ */}
        <Grid item xs={12} md={5}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Paper elevation={2} sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <LocationOnIcon color="primary" fontSize="large" />
              <Box>
                <Typography variant="h6">Địa chỉ</Typography>
                <Typography variant="body2" color="text.secondary">123 Đường Hoa Hồng, Q.1, TP.HCM</Typography>
              </Box>
            </Paper>

            <Paper elevation={2} sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <PhoneIcon color="primary" fontSize="large" />
              <Box>
                <Typography variant="h6">Điện thoại</Typography>
                <Typography variant="body2" color="text.secondary">0909 123 456</Typography>
              </Box>
            </Paper>

            <Paper elevation={2} sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
              <EmailIcon color="primary" fontSize="large" />
              <Box>
                <Typography variant="h6">Email</Typography>
                <Typography variant="body2" color="text.secondary">info@myspa.com</Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>

        {/* Form liên hệ */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>Gửi tin nhắn</Typography>
            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Họ tên" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Chủ đề" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Nội dung" multiline rows={4} variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" size="large" fullWidth>
                    Gửi tin nhắn
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
