import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" px="40px" pt="24px" pb="40px">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' }, textAlign: 'center' }} mt="41px">
      Made with ❤️ by JavaScript Mastery
    </Typography>
  </Box>
);

export default Footer;

