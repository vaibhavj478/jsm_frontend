import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import AboutUsBg from './../assets/Images/aboutus.jpg';

function AboutUs() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${AboutUsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          "Life is short and the world is wide..."
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Charm & Awe Travel Co. My name is Amy Grishman and I've had a love for travel since studying abroad in college.
          During that time I spent five months traveling to as many places as my wallet would allow (Spain, France, England, Italy, Portugal, and more!)
          Fast forward thirteen years and I'm now married to my best friend (we tied the knot in Jamaica!) and I've had two boys (both of whom got their first passport stamps before the age of one).
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: '20px' }}
        >
          Read More
        </Button>
      </Container>
    </Box>
  );
}

export default AboutUs;
