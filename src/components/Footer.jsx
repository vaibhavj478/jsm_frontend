import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'grey.900',
        color: 'common.white',
        py: 6,
        paddingBottom:"2.5rem"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Link href="#" variant="body2" color="inherit" underline="hover">
              About Us
            </Link>
            <br />
            <Link href="#" variant="body2" color="inherit" underline="hover">
              Careers
            </Link>
            <br />
            <Link href="#" variant="body2" color="inherit" underline="hover">
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Link href="#" variant="body2" color="inherit" underline="hover">
              Tour Packages
            </Link>
            <br />
            <Link href="#" variant="body2" color="inherit" underline="hover">
              Desert Safaris
            </Link>
            <br />
            <Link href="#" variant="body2" color="inherit" underline="hover">
              Sightseeing
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Link href="#" variant="body2" color="inherit" underline="hover">
              Blog
            </Link>
            <br />
            <Link href="#" variant="body2" color="inherit" underline="hover">
              FAQ
            </Link>
            <br />
            <Link href="#" variant="body2" color="inherit" underline="hover">
              Terms & Conditions
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="#" variant="body2" color="inherit" underline="hover">
              Facebook
            </Link>
            <br />
            <Link href="#" variant="body2" color="inherit" underline="hover">
              Twitter
            </Link>
            <br />
            <Link href="#" variant="body2" color="inherit" underline="hover">
              Instagram
            </Link>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Jaisalmer Desert Campand Safari. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
