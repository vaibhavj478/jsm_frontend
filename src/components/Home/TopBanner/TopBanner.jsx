import React from 'react'

import './TopBanner.css';

import { Grid, Typography, Divider, Card, CardContent, CardMedia, Box } from '@mui/material';


import { fontSize, styled } from '@mui/system';


const ZoomCardMedia = styled(CardMedia)({
  transition: 'transform 0.3s ease-in-out',
  transformOrigin: 'center',
  '&:hover': {
    transform: 'scale(1.05)', // Zoom in on hover
  },
});

import one from "./jaisalmer-holiday-tour1.png"
import two from "./jaisalmer-holiday-tour2.jpg"
import three from "./jaisalmer-holiday-tour3.jpg"
import four from "./jaisalmer-holiday-tour4.jpg"


const cardsData = [
  { id: 1, title: 'DESERT SAFARI JAISALMER', description: '', image: four  },
  { id: 2, title: 'JEEP SAFARI JAISALMER', description: '', image:two  },
  { id: 3, title: 'DESERT CAMP JAISALMER', description: '', image: three },
  { id: 4, title: 'JAISALMER DESERT FESTIVAL', description: '', image: one  },
];


const TopBanner = () => {
  return (

    <>

      <section style={{ padding: '2rem' }}>
        <Typography variant="h5" m={2} style={{fontFamily:"Amsterdam"  , color:"#B60071"}}  gutterBottom align="center">
          {/* JAISALMER HOLIDAY */}
          Jaisalmer Holiday
        </Typography>
        <Divider variant="middle" style={{ marginBottom: '1.5rem' }} />
        <Typography variant="body1" align="center" style={{ marginBottom: '2rem' }}>
          {/* This is a little paragraph after the heading to introduce the banner. */}
        </Typography>

        <Grid container spacing={2}>
          {cardsData.map((card) => (
            <Grid
              item
              xs={12}        // Full width on mobile
              sm={6}         // Two columns on tablet
              md={3}         // Four columns on larger screens
              key={card.id}
            >
              <Card>
                <Box sx={{ overflow: 'hidden' }}> {/* Ensure the image doesn't exceed the card boundary */}
                  <ZoomCardMedia
                    component="img"
                    height="140"
                    image={card.image}
                    alt={card.title}
                  />
                </Box>
                <CardContent>
                  <Typography sx={{
                    fontSize: {

                      md: 'medium', // font size on medium devices and above
                    },
                  }} variant="h6" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

    </>
  )
}

export default TopBanner