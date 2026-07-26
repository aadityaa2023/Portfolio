import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b388ff', // Vibrant soft purple
      light: '#e7b9ff',
      dark: '#805acb',
    },
    secondary: {
      main: '#00e676', // Keep the green as an accent
    },
    background: {
      default: '#050505', // Very dark, almost black
      paper: 'rgba(255, 255, 255, 0.03)', // Glassmorphism base
    },
    text: {
      primary: '#f5f5f7', // Apple-style off-white
      secondary: '#a1a1a6',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
    },
    button: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.05em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 24, // High border radius for Bento box style
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 28px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        contained: {
          background: 'linear-gradient(135deg, #b388ff 0%, #805acb 100%)',
          color: '#fff',
          boxShadow: '0 4px 14px 0 rgba(179, 136, 255, 0.39)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(179, 136, 255, 0.23)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
            transform: 'translateY(-2px)',
          }
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: 'none',
          backgroundImage: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          fontWeight: 500,
          color: '#f5f5f7',
        },
      },
    },
  },
});

export default theme;
