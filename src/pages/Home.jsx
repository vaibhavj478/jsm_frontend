import React from "react";
import BannerForAll from '../components/BannerForAll'
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import bannerImage from "./../assets/Images/banner.jpg";


// import Services from "../components/Services";
import Packages from "../components/Packages";
import AboutUs from "./AboutUs";
import {ReactTyped} from "react-typed";

import TopBanner from '../components/Home/TopBanner/TopBanner'

import './styles/Home.css'
import ParallaxSection from "../components/ParallaxSection";



// .hoverImageWrapper:hover .hoverImage {
//   transform: scale(1.2);
// }

const Home = () => {
  return (
    <>  
      <BannerForAll title={'Jaisalmer Desert Camp And Safari'} subtitle={[
            "Explore the World, One Journey at a Time",
            "Your Adventure Begins Here",
            "Travel Far, Create Memories Closer",
            "Discover More with Every Mile",
            "Wander Beyond, Experience Beyond"
          ]} bannerType={'image'} bannerUrl={``}   isArr={true} />

     
      {/* <Services /> */}
      {/* <Packages /> */}
      <TopBanner />




       <ParallaxSection/>



      <AboutUs />
      
    </>
  );
};

export default Home;


{/* <BannerContainer  className="hoverImage"  >
<BannerContent>
  <Typography
    variant="h2"
    component="h1"
    gutterBottom
    sx={{ fontSize: { xs: "7vw", md: "5vw" } }}
  >
  Jaisalmer Desert Camp And Safari
  </Typography>
  <Typography
    variant="h5"
    component="p"
    gutterBottom
    sx={{ fontSize: { xs: "3vw", md: "3vw" } }}
  >
    
    <ReactTyped
  strings={[
    "Explore the World, One Journey at a Time",
    "Your Adventure Begins Here",
    "Travel Far, Create Memories Closer",
    "Discover More with Every Mile",
    "Wander Beyond, Experience Beyond"
  ]}
  typeSpeed={100}
  loop
  backSpeed={50}
  cursorChar="|"
  showCursor={true}
/>
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
</BannerContainer> */}