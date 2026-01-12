import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366F1', // Electric Indigo
      light: '#818CF8',
      dark: '#4F46E5',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#10B981', // Emerald (Perfect for 'Estimate Finished' states)
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0B0F19', // Deep Slate/Black
      paper: '#111827',   // Slightly lighter card background
    },
    text: {
      primary: '#F9FAFB',
      secondary: '#9CA3AF',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: `'Inter', 'Plus Jakarta Sans', sans-serif`, // More modern font stack
    h1: { fontWeight: 800, letterSpacing: '-0.02em' },
    h2: { fontWeight: 700, letterSpacing: '-0.01em' },
    button: { 
      textTransform: 'none', 
      fontWeight: 600,
      letterSpacing: '0.02em' 
    },
  },
  shape: {
    borderRadius: 12, // Softer, more modern corners
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Removes the default MUI grey overlay in dark mode
          border: '1px solid rgba(255, 255, 255, 0.05)', // Subtle border
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 20px',
          borderRadius: 8,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 0px 15px rgba(99, 102, 241, 0.3)', // Soft glow on hover
          },
        },
      },
    },
  },
});

export default theme;