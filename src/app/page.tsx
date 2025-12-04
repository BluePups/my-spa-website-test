import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner */}
      <Box 
        sx={{
          width: '100%',
          height: { xs: '300px', md: '500px' },
          backgroundImage: 'url(/hero-banner.jpg)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Overlay Gradient */}
        <Box 
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(123, 31, 162, 0.7), rgba(33, 150, 243, 0.6))',
            zIndex: 1
          }}
        />
        
        {/* Banner Content */}
        <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', px: 2 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'white', 
              fontWeight: 'bold', 
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              mb: 2,
              fontSize: { xs: '2rem', md: '3.5rem' }
            }}
          >
            Vẻ Đẹp Tỏa Sáng
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#e1bee7', 
              mb: 4,
              fontSize: { xs: '1rem', md: '1.5rem' }
            }}
          >
            Trải nghiệm dịch vụ spa đẳng cấp 5 sao
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            component={Link}
            href="/booking"
            sx={{ 
              backgroundColor: '#fff', 
              color: '#7b1fa2', 
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: '#f3e5f5'
              }
            }}
          >
            Đặt lịch ngay
          </Button>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* 2. Giới thiệu + Ảnh service */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src="/services.jpg"
              alt="Spa Services Intro"
              sx={{
                width: '100%',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '4px solid white'
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom color="primary">
              Chào mừng đến với My Spa
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Chúng tôi tự hào mang đến những liệu pháp làm đẹp và thư giãn hàng đầu. 
              Với đội ngũ chuyên viên giàu kinh nghiệm và không gian sang trọng, 
              My Spa là điểm đến lý tưởng để bạn nuông chiều bản thân sau những ngày làm việc căng thẳng.
            </Typography>
            <Button variant="outlined" color="secondary" size="large" component={Link} href="/about">
              Tìm hiểu thêm
            </Button>
          </Grid>
        </Grid>

        {/* 3. Dịch vụ nổi bật */}
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold', color: '#4a148c' }}>
          Dịch vụ nổi bật
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <ServiceCard 
              title="Chăm sóc da mặt" 
              description="Liệu trình chuyên sâu giúp da sáng mịn, căng tràn sức sống."
              imageUrl="[https://placehold.co/600x400/f48fb1/white?text=Skin+Care](https://placehold.co/600x400/f48fb1/white?text=Skin+Care)"
              price="500.000đ"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard 
              title="Massage Thư Giãn" 
              description="Xua tan mệt mỏi với kỹ thuật massage đá nóng cổ truyền."
              imageUrl="[https://placehold.co/600x400/ce93d8/white?text=Massage](https://placehold.co/600x400/ce93d8/white?text=Massage)"
              price="300.000đ"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard 
              title="Tắm Trắng Thảo Dược" 
              description="Sử dụng nguyên liệu thiên nhiên, an toàn và hiệu quả."
              imageUrl="[https://placehold.co/600x400/81d4fa/white?text=Whitening](https://placehold.co/600x400/81d4fa/white?text=Whitening)"
              price="1.200.000đ"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}