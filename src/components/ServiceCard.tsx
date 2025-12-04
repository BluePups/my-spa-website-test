'use client';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button, Box } from '@mui/material';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

export default function ServiceCard({ title, description, imageUrl, price }: ServiceCardProps) {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'perspective(1000px) rotateX(2deg) translateY(-10px)',
          boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
          '& .MuiCardMedia-root': {
            filter: 'brightness(1.1)'
          }
        }
      }}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          <Box 
            sx={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
              zIndex: 1,
              opacity: 0,
              transition: 'opacity 0.3s',
              '.MuiCard-root:hover &': {
                opacity: 1
              }
            }} 
          />
          <CardMedia
            component="img"
            height="200"
            image={imageUrl}
            alt={title}
            sx={{ transition: 'filter 0.3s' }}
          />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ color: '#880e4f', fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
          <Typography variant="h6" color="primary" fontWeight="bold">
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ p: 2 }}>
        <Button 
          size="medium" 
          color="primary" 
          variant="contained" 
          fullWidth
          component={Link}
          href="/booking"
          sx={{
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        >
          Đặt ngay ✨
        </Button>
      </CardActions>
    </Card>
  );
}
