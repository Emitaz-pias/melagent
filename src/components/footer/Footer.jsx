import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1e1e1e', color: '#ffffff', py: 4 }}>
      <Grid container spacing={3} padding={'0.5em'} textAlign={{xs:'center',sm:'center',md:''}}>
        {/* Column 1: Navigation Links */}
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Link href="/" color="inherit" underline="hover" display="block">
            Home
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            About Us
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Services
          </Link>
          <Link href="#" color="inherit" underline="hover" display="block">
            Contact
          </Link>
        </Grid>

        {/* Column 2: Contact Information */}
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" gutterBottom>
            Email: <Link href="mailto:manager@melbetagentship.com" color="inherit">manager@melbetagentship.com</Link>
          </Typography>
         
        </Grid>

        {/* Column 3: Social Media */}
        {/* <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton color="inherit" href="https://facebook.com" target="_blank">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="https://linkedin.com" target="_blank">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank">
              <Instagram />
            </IconButton>
          </Box>
        </Grid> */}
      </Grid>

      {/* Bottom Bar */}
      <Box textAlign="center" mt={4}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Melbet Agentship. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
