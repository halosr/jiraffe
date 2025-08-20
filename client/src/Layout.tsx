import { Box } from '@mui/material';
import { Fragment, type FC, type ReactNode } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebars/Sidebar';

const Layout: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box role="main" sx={{ flexGrow: 1, display: 'flex' }}>
        <Sidebar />
        <Box sx={{flexGrow: 1}}>{children}</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
