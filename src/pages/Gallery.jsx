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


const Gallery = () => {
  return (
    <>
        <BannerForAll title={'Our memories, defines our gratitude'} subtitle={[
           "Travel Far, Create Memories Closer",
            "Discover More with Every Mile"
            ]} bannerType={'image'} bannerUrl={``} isArr={true} />

     
      {/* <Services /> */}
      {/* <Packages /> */}
      <TopBanner />


      

      <AboutUs />
    </>
    )
}

export default Gallery