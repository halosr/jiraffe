import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#B0DB9C', // Pale Olive
      light: '#CAE8BD', // Sage Mist
      dark: '#96C688',
      contrastText: '#2D2D2D',
    },
    secondary: {
      main: '#DDF6D2', // Soft Mint
      light: '#ECFAE5',
      contrastText: '#2D2D2D',
    },
    background: {
      default: '#ECFAE5', // Light Cream
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D2D2D',
      secondary: '#4F5A48',
    },
    divider: '#D0E7C6',
    success: {
      main: '#6FBF73',
    },
    warning: {
      main: '#FFC107',
    },
    error: {
      main: '#D9534F',
    },
  },
  typography: {
    fontFamily: `'Inter', 'Helvetica', 'Arial', sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
//   components: {
//     MuiPaper: {
//       styleOverrides: {
//         root: {
//           borderRadius: 12,
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8,
//         },
//       },
//     },
//   },
});

export default theme;
