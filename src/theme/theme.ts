'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#f48fb1', // Hồng pastel
      contrastText: '#fff',
    },
    secondary: {
      main: '#ce93d8', // Tím nhạt bổ trợ
    },
    background: {
      default: '#fff0f5', // Lavender blush nhẹ nhàng
      paper: '#ffffff',
    },
    text: {
      primary: '#4a4a4a',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    // BẮT BUỘC PHẢI KHAI BÁO CÁC DÒNG NÀY ĐỂ TRÁNH LỖI CssBaseline
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      color: '#d81b60',
    },
    h2: {
      fontWeight: 600,
      color: '#ad1457',
    },
    h3: {
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '25px',
          boxShadow: '0 4px 6px rgba(244, 143, 177, 0.4)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 10px rgba(244, 143, 177, 0.6)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #f48fb1 30%, #ff80ab 90%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          overflow: 'hidden',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;