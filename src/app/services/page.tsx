import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ServiceCard from '@/components/ServiceCard';

const allServices = [
  { title: "Trị mụn chuyên sâu", desc: "Đánh bay mụn, mờ thâm", img: "[https://placehold.co/600x400/png?text=Acne](https://placehold.co/600x400/png?text=Acne)", price: "800.000đ" },
  { title: "Massage Body", desc: "Thư giãn toàn thân 60 phút", img: "[https://placehold.co/600x400/png?text=Body](https://placehold.co/600x400/png?text=Body)", price: "400.000đ" },
  { title: "Gội đầu dưỡng sinh", desc: "Thư giãn vùng đầu cổ vai gáy", img: "[https://placehold.co/600x400/png?text=Hair](https://placehold.co/600x400/png?text=Hair)", price: "150.000đ" },
  { title: "Triệt lông vĩnh viễn", desc: "Công nghệ Laser Diode hiện đại", img: "[https://placehold.co/600x400/png?text=Laser](https://placehold.co/600x400/png?text=Laser)", price: "2.000.000đ" },
  { title: "Phun xăm thẩm mỹ", desc: "Mày môi tự nhiên", img: "[https://placehold.co/600x400/png?text=Tattoo](https://placehold.co/600x400/png?text=Tattoo)", price: "3.000.000đ" },
  { title: "Trẻ hóa da", desc: "Nâng cơ Hifu không phẫu thuật", img: "[https://placehold.co/600x400/png?text=Hifu](https://placehold.co/600x400/png?text=Hifu)", price: "5.000.000đ" },
];

export default function ServicesPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom color="primary" sx={{ mb: 6, fontWeight: 'bold' }}>
        Menu Dịch Vụ
      </Typography>
      <Grid container spacing={4}>
        {allServices.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard 
              title={service.title}
              description={service.desc}
              imageUrl={service.img}
              price={service.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
