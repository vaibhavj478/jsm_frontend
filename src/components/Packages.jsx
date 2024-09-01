import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const tours = [
    {
        title: "Jaipur Sightseeing Tour (Sedan Taxi)",
        image: "https://source.unsplash.com/random/300x200?jaipur",
        type: "Customizable 1 Day Tour (9 AM - 6 PM)",
        inclusions: [
            "Transportation in Sedan AC Taxi (Etios, Dzire)",
            "Professional Driver Cum Guide",
        ],
        price: "₹ 999 Onwards",
        originalPrice: "₹ 1,499",
        offer: true,
    },
    {
        title: "Jaipur Sightseeing Tour (SUV Taxi)",
        image: "https://source.unsplash.com/random/300x200?palace",
        type: "Customizable 1 Day Tour (9 AM - 6 PM)",
        inclusions: [
            "Transportation in SUV AC Taxi (Innova)",
            "Professional Driver Cum Guide",
        ],
        price: "₹ 1,899 Onwards",
        originalPrice: "₹ 2,599",
        offer: true,
    },
    {
        title: "Jaipur 2 Days Tour (Trending)",
        image: "https://source.unsplash.com/random/300x200?elephant",
        type: "Customizable 1 Night / 2 Days",
        inclusions: [
            "Transportation in AC Sedan/SUV/Tempo Traveller",
            "A/C accommodation on Double & Triple sharing",
        ],
        price: "Price On Request",
        originalPrice: "₹ Offer",
        offer: false,
    },
];

const TourCard = styled(Card)(({ theme }) => ({
    margin: '1rem',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'calc(50% - 2rem)',
    },
    [theme.breakpoints.up('md')]: {
        width: 'calc(33.33% - 2rem)',
    },
}));

const Packages = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container justifyContent="center">
                {tours.map((tour, index) => (
                    <TourCard key={index}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={tour.image}
                            alt={tour.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {tour.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Tour Type: <span style={{ color: 'green' }}>{tour.type}</span>
                            </Typography>
                            <Box mt={2}>
                                <Typography variant="subtitle1">Package Inclusion:</Typography>
                                <ul>
                                    {tour.inclusions.map((inclusion, i) => (
                                        <li key={i}>{inclusion}</li>
                                    ))}
                                </ul>
                            </Box>
                            <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
                                <Box>
                                    {tour.offer && (
                                        <Typography variant="body2" color="text.secondary" style={{ textDecoration: 'line-through' }}>
                                            {tour.originalPrice}
                                        </Typography>
                                    )}
                                    <Typography variant="h6" color="primary">
                                        {tour.price}
                                    </Typography>
                                </Box>
                                <Button variant="contained" color="primary">
                                    SEND ENQUIRY
                                </Button>
                            </Box>
                        </CardContent>
                    </TourCard>
                ))}
            </Grid>
        </Box>
    );
};

export default Packages;
