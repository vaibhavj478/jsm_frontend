import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

// import camelSafariImage from "../assets/images/services/camel-safari.jpg";
// import desertCampImage from "../assets/images/services/desert-camp.jpg";
// import adventureToursImage from "../assets/images/services/adventure-tours.jpg";

const services = [
  {
    title: "Camel Safari",
    description:
      "Experience the desert like never before with our camel safaris.",
    image: "camelSafariImage",
  },
  {
    title: "Desert Camp",
    description:
      "Stay overnight in our comfortable desert camps and enjoy the starry night sky.",
    image: "desertCampImage",
  },
  {
    title: "Adventure Tours",
    description:
      "Join our adventure tours for an adrenaline-filled experience in the desert.",
    image: "adventureToursImage",
  },
  {
    title: "Adventure Tours",
    description:
      "Join our adventure tours for an adrenaline-filled experience in the desert.",
    image: "adventureToursImage",
  },
  {
    title: "Camel Safari",
    description:
      "Experience the desert like never before with our camel safaris.",
    image: "camelSafariImage",
  },
  {
    title: "Desert Camp",
    description:
      "Stay overnight in our comfortable desert camps and enjoy the starry night sky.",
    image: "desertCampImage",
  },
  {
    title: "Adventure Tours",
    description:
      "Join our adventure tours for an adrenaline-filled experience in the desert.",
    image: "adventureToursImage",
  },
  {
    title: "Adventure Tours",
    description:
      "Join our adventure tours for an adrenaline-filled experience in the desert.",
    image: "adventureToursImage",
  },
];

const Services = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#1d1d1d" }}>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          sx={{ color: "white" }}
        >
          MY <span style={{ color: "#7b61ff" }}>SERVICES</span>
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: "white", mb: 4 }}
        >
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum standard dummy text.
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#282828",
                  color: "white",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2">{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
