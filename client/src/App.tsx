import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import '@/App.css';
import Layout from '@/Layout';
import theme from '@/theme/theme';

import Dashboard from '@/pages/dashboard/Dashboard';
import Create from '@/pages/create/Create';
import Rooms from '@/pages/rooms/Rooms';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Box>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
            <Route path="/rooms" element={<Rooms />} />
          </Routes>
        </Box>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
