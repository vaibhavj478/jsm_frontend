import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import AboutUsBg from "./../assets/Images/about.jpg";

function AboutUs() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${AboutUsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
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
          Welcome to Jaisalmer Desert Campand Safari Co. My name is Bhavesh, and I share a
          deep passion for travel that has only grown over the years. My journey
          started with an adventurous spirit and an eagerness to explore the
          world, and today, I’m excited to help others experience the magic of
          travel. One of the places closest to my heart is Jaisalmer, a city
          that embodies the golden allure of Rajasthan. Known as the "Golden
          City," Jaisalmer is a place where history comes alive in its
          magnificent forts, ancient havelis, and endless sand dunes. From the
          majestic Jaisalmer Fort, which stands tall as a UNESCO World Heritage
          Site, to the tranquil beauty of Gadisar Lake, Jaisalmer offers a
          perfect blend of adventure and culture
        </Typography>
        <Button variant="contained"  sx={{ border:"2px solid #FFB200" ,  fontSize:"1rem",  padding:"0.75rem 1rem" ,   marginTop: "20px" , backgroundColor:"#FFB200"  ,

'&:hover': {
  backgroundColor: "#fff" ,
  color: "#FFB200" // Change the color on hover
}
         }}>
          Contact us
        </Button>
      </Container>
    </Box>
  );
}

export default AboutUs;
