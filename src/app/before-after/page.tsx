import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';

export default function BeforeAfterPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom color="primary" sx={{ mb: 2, fontWeight: 'bold' }}>
        Thư Viện Hình Ảnh
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8 }}>
        Những sự thay đổi ngoạn mục của khách hàng tại My Spa
      </Typography>

      <BeforeAfterGallery 
        title="Điều trị mụn viêm" 
        imageCombined="[https://placehold.co/800x400/png?text=Before+After+Acne](https://placehold.co/800x400/png?text=Before+After+Acne)"
      />
      
      <BeforeAfterGallery 
        title="Tắm trắng toàn thân" 
        imageCombined="[https://placehold.co/800x400/png?text=Before+After+Whitening](https://placehold.co/800x400/png?text=Before+After+Whitening)"
      />

      <BeforeAfterGallery 
        title="Trẻ hóa da mặt" 
        imageCombined="[https://placehold.co/800x400/png?text=Before+After+AntiAging](https://placehold.co/800x400/png?text=Before+After+AntiAging)"
      />
    </Container>
  );
}