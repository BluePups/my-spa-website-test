'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

interface BeforeAfterGalleryProps {
  imageCombined: string; // URL của ảnh đã ghép sẵn (Combined)
  title: string;
}

export default function BeforeAfterGallery({ imageCombined, title }: BeforeAfterGalleryProps) {
  return (
    <Box sx={{ mb: 6, textAlign: 'center' }}>
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 3, 
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #ec407a, #ab47bc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block'
        }}
      >
        {title} 🎭
      </Typography>
      
      <Stack 
        direction="column" 
        alignItems="center" 
        spacing={2}
        sx={{
          '&:hover': {
            '& .gallery-paper': {
              transform: 'scale(1.02) translateY(-5px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
            }
          }
        }}
      >
        <Paper 
          className="gallery-paper"
          elevation={4}
          sx={{ 
            p: 1, 
            borderRadius: 2, 
            overflow: 'hidden',
            transition: 'all 0.4s ease-out',
            maxWidth: '100%'
          }}
        >
          <Box
            component="img"
            src={imageCombined}
            alt={`${title} Before and After`}
            sx={{
              width: '100%',
              maxWidth: '800px', // Giới hạn chiều rộng ảnh
              height: 'auto',
              display: 'block',
              borderRadius: 1
            }}
          />
        </Paper>
        <Typography variant="body2" color="text.secondary" fontStyle="italic">
          * Kết quả thực tế từ khách hàng
        </Typography>
      </Stack>
    </Box>
  );
}
