import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import '@/App.css';
import Layout from '@/Layout';
import theme from '@/theme/theme';

import Dashboard from '@/pages/dashboard/Dashboard';
import Create from '@/pages/create/Create';
import Rooms from '@/pages/rooms/Rooms';
import Login from '@/pages/login/login';
import Board from './pages/board/Board';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Box>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create" element={<Create />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<Board />} />

          </Routes>
        </Box>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
