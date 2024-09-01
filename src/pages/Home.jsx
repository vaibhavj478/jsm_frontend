import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import bannerImage from "./../assets/Images/bannerImg.png";

// import Services from "../components/Services";
import Packages from "../components/Packages";
import AboutUs from "./AboutUs";
const BannerContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bannerImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "70vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    height: "50vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "40vh",
  },
}));

const BannerContent = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));
const Home = () => {
  return (
    <>
      <BannerContainer>
        <BannerContent>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Welcome to Our Website
          </Typography>
          <Typography
            variant="h5"
            component="p"
            gutterBottom
            sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
          >
            Explore the best tours and travels with us.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              fontSize: { xs: "0.75rem", md: "1rem" },
              padding: { xs: "0.5rem 1rem", md: "0.75rem 1.5rem" },
            }}
          >
            Get Started
          </Button>
        </BannerContent>
      </BannerContainer>
      {/* <Services /> */}
      <Packages />
      <AboutUs />
    </>
  );
};

export default Home;
