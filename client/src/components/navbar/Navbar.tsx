import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const pages = [
  { label: 'Home', path: '/' },
  { label: 'Create', path: '/create' },
  { label: 'Rooms', path: '/rooms' },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Box>
          <Toolbar>
            <Typography variant="h5" display="flex" gap={1} fontWeight="bold">
              <img src="/jiraffe_icon.png" alt="logo" height={30} />
              JIRAffe
            </Typography>

            <Box sx={{ marginLeft: 'auto' }}>
              {isMobile ? (
                <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
              ) : (
                <>
                  {pages.map((page) => (
                    <Button component={Link} to={page.path} color="inherit">
                      {page.label}
                    </Button>
                  ))}
                </>
              )}
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: (theme) => theme.palette.background.default,
            },
          },
        }}
      >
        <Box sx={{ width: 200 }} role="presentation" onClick={() => toggleDrawer(false)}>
          <List>
            {pages.map((page, index) => (
              <ListItemButton
                key={index}
                component={Link}
                to={page.path}
                onClick={() => toggleDrawer(false)}
                aria-label={`${page.label} link`}
              >
                <ListItemText primary={page.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
