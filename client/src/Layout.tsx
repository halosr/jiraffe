import { Box } from '@mui/material';
import { type FC, type ReactNode } from 'react';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sidebars/Sidebar';
import { useSelector } from 'react-redux';

const Layout: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
  const {isAuthRequired} = useSelector((state: any) => state.page);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box role="main" sx={{ flexGrow: 1, display: 'flex' }}>
        {isAuthRequired && <Sidebar />}
        <Box sx={{display: 'flex', flexGrow: 1}}>{children}</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
