import { Box } from '@mui/material';
import { type FC, type ReactNode } from 'react';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';

const Layout: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Navbar />
            <Box role="main" sx={{ flexGrow: 1, display: 'flex', margin: '0 2rem' }}>
                <Box width="100%">{children}</Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
