import React from 'react'
import BannerForAll from '../components/BannerForAll'

import Slider from 'react-slick';
import styled from '@emotion/styled';

import campbanner from '../assets/Images/campbanner.jpg'
import desert_safaribanner from '../assets/Images/desert_safaribanner.jpg'


import './styles/Desert_safari.css'

import Button from "@mui/material/Button";

import { Box } from '@mui/system';
import { whatsAppUrl } from '../assets/constant';

import one from '../assets/Images/desert_safari/1.jpg'
import two from '../assets/Images/desert_safari/2.jpg'
import three from '../assets/Images/desert_safari/3.jpg'
import four from '../assets/Images/desert_safari/4.jpg'
import five from '../assets/Images/desert_safari/5.jpg'


import desert from '../assets/Images/sites/desert.jpg'
import paracelling from '../assets/Images/sites/paracelling.jpg'

import bornfire from '../assets/Images/sites/bornfire.jpg'

const BannerWrapper = styled(Box)`
  width: 100%;
  margin: 1rem auto;
`;

// Review cards slider configuration
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true
};

const Camel_Safari = [
    {
        imageUrl: one
    },
    {
        imageUrl: two
    },
    {
        imageUrl: three
    },
    {
        imageUrl: four
    },
    {
        imageUrl: five
    },
  
]

const Desert_safari = () => {
    return (
        <>

            {/* <BannerForAll  title={'Camp Packages'}  subtitle={'Pick a room that best suits your taste and budget.'}  bannerType={'video'} bannerUrl={`https://www.youtube.com/embed/sUr70deofFw?si=NeQQziKtWVbdcNVG`}  /> */}
            <BannerForAll title={'Desert Safari Camp - Desert Safari'} subtitle={'Spend your vacations in desert'} bannerType={'image'} bannerUrl={`${desert_safaribanner}`} />

            <a aria-label="Chat on WhatsApp" className='linkng-tag' href={`${whatsAppUrl}`}>
                <Box className={'product-outer-container'} >
                    <Box className="image-group">
                        {/* <img src={siteseen} alt="Camp Banner" className="product-image" /> */}

                        <BannerWrapper>
                            <Slider {...sliderSettings}>
                                {Camel_Safari.map((el, index) => (
                                    <Box key={index} px={2}>
                                        <img src={el.imageUrl} alt="Camp Banner" className="product-image" />
                                    </Box>
                                ))}
                            </Slider>
                        </BannerWrapper>
                    </Box>
                    <Box className="product-details">
                        <h2>Camel Safari</h2>
                        {/* <h3>Inclusions</h3> */}
                        <p> Being in the city of Desert Safari Camp Tents in Jaisalmer of moving sand ridges, you can’t get away from the seat travel. A rough ride on a camel in the Thar Desert is one of the energizing things to do in Jaisalmer Desert Safari Camp.
                        </p>
                        <p> It enables you to investigate the remote and segregated spots tucked amidst the abandon. Absolutely, the additional time you give on your safari, the more remote spots you are probably going to see and the more you may acclimate to and appreciate the abandon serenity.
                        </p>
                        {/* <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button> */}
                    </Box>
                </Box>
            </a>
            <a aria-label="Chat on WhatsApp" className='linkng-tag' href={`${whatsAppUrl}`}>
                <Box className={'product-outer-container'} >
                    <Box className="product-details">
                        <h2>Desert Jeep Safari</h2>
                        <p> If you think you are more on the adventure side then try the Jeep safari to explore the desert. Jeep Safari is considered the fast and comfortable way to explore the beauty of Jaisalmer. By jeep safari tours you can travel around the wildlife, dunes places, and deserts. Jeeps can take you to the interiors of a village or a town. This adventure will gift you memories to last for a lifetime. Jeep safari tours help you in discovering those aspects of Jaisalmer.
                        </p>

                        {/* <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button> */}
                    </Box>
                    <Box className="image-group">
                        <img src={bornfire} alt="Camp Banner" className="product-image" />
                    </Box>
                </Box>
            </a>


        </>
    )
}

export default Desert_safari