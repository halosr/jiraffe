import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={(theme) => ({ textAlign: 'center', padding: theme.spacing(2), backgroundColor: theme.palette.primary.light })}
    >
      <Typography variant="body1" color="initial">
        &copy; All Rights Reserved 2025
      </Typography>
    </Box>
  );
};

export default Footer;
