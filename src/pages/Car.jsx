import React from 'react'
import BannerForAll from '../components/BannerForAll'

import carbanner from '../assets/Images/barbanner.jpg'

import Slider from 'react-slick';
import styled from '@emotion/styled';


import './styles/Car.css'

import Button from "@mui/material/Button";

import { Box } from '@mui/system';
import { whatsAppUrl } from '../assets/constant';

import one from '../assets/Images/car/1.jpg'
import two from '../assets/Images/car/2.jpg'
import three from '../assets/Images/car/3.jpg'
import four from '../assets/Images/car/4.jpg'
import five from '../assets/Images/car/5.jpg'
import six from '../assets/Images/car/6.jpg'
import seven from '../assets/Images/car/7.jpg'
import eight from '../assets/Images/car/8.jpg'
import nine from '../assets/Images/car/9.jpg'
import ten from '../assets/Images/car/10.jpg'
import Eleven from '../assets/Images/car/11.jpg'
import Twelve from '../assets/Images/car/12.jpg'
import Thirteen from '../assets/Images/car/13.jpg'
import Fourteen from '../assets/Images/car/14.jpg'
import Fifteen from '../assets/Images/car/15.jpg'
import Sixteen from '../assets/Images/car/16.jpg'
import Seventeen from '../assets/Images/car/17.jpg'

// width: 100%;
// border: 2px solid red;

const BannerWrapper = styled(Box)`
    max-width: 450px;
    min-width:  250px;
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
    // pauseOnHover: true
};

const cars_img = [
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
    {
        imageUrl: six
    },
    {
        imageUrl: seven
    },
    {
        imageUrl: eight
    },
    {
        imageUrl: nine
    },
    {
        imageUrl: ten
    },
    {
        imageUrl: Eleven
    },
    {
        imageUrl: Twelve
    },
    {
        imageUrl: Thirteen
    },
    {
        imageUrl: Fourteen
    },
    {
        imageUrl: Fifteen
    },
    {
        imageUrl: Sixteen
    },
    {
        imageUrl: Seventeen
    },


]




const Car = () => {
    return (
        <>

            {/* <BannerForAll  title={'Camp Packages'}  subtitle={'Pick a room that best suits your taste and budget.'}  bannerType={'video'} bannerUrl={`https://www.youtube.com/embed/sUr70deofFw?si=NeQQziKtWVbdcNVG`}  /> */}
            <BannerForAll title={'Jaisalmer Taxi Services'} subtitle={'In Jaisalmer, Royal Adventure Tour offers reasonable, budget, and premium Taxi and Cab services.'} bannerType={'image'} bannerUrl={`${carbanner}`} />



            <Box className={'product-outer-container'} >
                <Box className="image-group">
                    {/* <img src={carbanner} alt="Camp Banner" className="product-image" /> */}

                    <BannerWrapper>
                        <Slider {...sliderSettings}>
                            {cars_img.map((el, index) => (
                                <Box key={index} px={2}>
                                    <img src={el.imageUrl} alt="Camp Banner" className="product-image" />
                                </Box>
                            ))}
                        </Slider>
                    </BannerWrapper>

                </Box>
                <Box className="product-details">
                    <h2>Transfers to the Railway Station</h2>
                    <p> We'll help you with a quick transfer from the Jaisalmer Railway Station to your hotel or from any place in Jaisalmer to the Jaisalmer Railway Station.
                    </p>
                    <h3>Car Type</h3>
                    <ul>
                        <li>- Hatchback (Indica / Swift / Ritz)</li>
                        <li>- Sedan (Etios / Dzire / Verito)</li>
                        <li>- MPV (Innova / Xylo / Marazzo)</li>
                        <li>- Tempo Traveller (13 seater)</li>
                    </ul>
                    <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>
                        <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                            Learn More or Book Your Ride
                        </Button>
                    </a>
                </Box>
            </Box>
            <Box className={'product-outer-container'} >

                <Box className="product-details">
                    <h2>Transfers to the Jaisalmer Airport</h2>
                    <p>We'll help you with a quick transfer from the Jaisalmer Airport to your hotel or from any place in Jaisalmer to the Jaisalmer Airport.</p>
                    <h3>Car Type</h3>
                    <ul>
                        <li>- Hatchback (Indica / Swift / Ritz)</li>
                        <li>- Sedan (Etios / Dzire / Verito)</li>
                        <li>- MPV (Innova / Xylo / Marazzo)</li>
                        <li>- Tempo Traveller (13 seater)</li>

                    </ul>

                    <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>
                        <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                            Learn More or Book Your Ride
                        </Button>
                    </a>
                </Box>

                <Box className="image-group">
                    {/* <img src={carbanner} alt="Camp Banner" className="product-image" /> */}

                    <BannerWrapper>
                        <Slider {...sliderSettings}>
                            {cars_img.map((el, index) => (
                                <Box key={index} px={2}>
                                    <img src={el.imageUrl} alt="Camp Banner" className="product-image" />
                                </Box>
                            ))}
                        </Slider>
                    </BannerWrapper>
                </Box>
            </Box>
            <Box className={'product-outer-container'} >
                <Box className="image-group">
                    {/* <img src={carbanner} alt="Camp Banner" className="product-image" /> */}

                    <BannerWrapper>
                        <Slider {...sliderSettings}>
                            {cars_img.map((el, index) => (
                                <Box key={index} px={2}>
                                    <img src={el.imageUrl} alt="Camp Banner" className="product-image" />
                                </Box>
                            ))}
                        </Slider>
                    </BannerWrapper>
                </Box>
                <Box className="product-details">
                    <h2>Transfers from City to Sam Dunes</h2>
                    <p>We can help you with a quick transfer from any part of Jaisalmer to the Sam Sand Dunes or vice-versa.</p>
                    <h3>Car Type</h3>
                    <ul>
                        <li>- Hatchback (Indica / Swift / Ritz)</li>
                        <li>- Sedan (Etios / Dzire / Verito)</li>
                        <li>- MPV (Innova / Xylo / Marazzo)</li>
                        <li>- Tempo Traveller (13 seater)</li>
                    </ul>

                    <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>
                        <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                            Learn More or Book Your Ride
                        </Button>
                    </a>
                </Box>
            </Box>
            <Box className={'product-outer-container'} >

                <Box className="product-details">
                    <h2>Transfers from Airport to Sam Dunes</h2>
                    <p>We can help you with a quick transfer from the Jaisalmer Airport to the Sam Sand Dunes or vice-versa.</p>
                    <h3>Car Type</h3>
                    <ul>
                        <li>- Hatchback (Indica / Swift / Ritz)</li>
                        <li>- Sedan (Etios / Dzire / Verito)</li>
                        <li>- MPV (Innova / Xylo / Marazzo)</li>
                        <li>- Tempo Traveller (13 seater)</li>
                    </ul>


                    <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>
                        <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                            Learn More or Book Your Ride
                        </Button>
                    </a>
                </Box>

                <Box className="image-group">
                    {/* <img src={carbanner} alt="Camp Banner" className="product-image" /> */}

                    <BannerWrapper>
                        <Slider {...sliderSettings}>
                            {cars_img.map((el, index) => (
                                <Box key={index} px={2}>
                                    <img src={el.imageUrl} alt="Camp Banner" className="product-image" />
                                </Box>
                            ))}
                        </Slider>
                    </BannerWrapper>
                </Box>
            </Box>
            <Box className={'product-outer-container'} >
                <Box className="image-group">
                    {/* <img src={carbanner} alt="Camp Banner" className="product-image" /> */}

                    <BannerWrapper>
                        <Slider {...sliderSettings}>
                            {cars_img.map((el, index) => (
                                <Box key={index} px={2}>
                                    <img src={el.imageUrl} alt="Camp Banner" className="product-image" />
                                </Box>
                            ))}
                        </Slider>
                    </BannerWrapper>
                </Box>
                <Box className="product-details">
                    <h2>Transfers from Jodhpur to Jaisalmer</h2>
                    <p> The distance between Jaislamer and Jodhpur is around 280 kms.
                    </p>
                    <p> The average time taken by a cab is around 4 hours.
                    </p>
                    <h3>Car Type</h3>
                    <ul>
                        <li>- Hatchback (Indica / Swift / Ritz)</li>
                        <li>- Sedan (Etios / Dzire / Verito)</li>
                        <li>- MPV (Innova / Xylo / Marazzo)</li>
                        <li>- Tempo Traveller (13 seater)</li>
                    </ul>

                    <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>
                        <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                            Learn More or Book Your Ride
                        </Button>
                    </a>
                </Box>
            </Box>
            <Box className={'product-outer-container'} >

                <Box className="product-details">
                    <h2>Transfers from Udaipur to Jaisalmer</h2>
                    <p>The distance between Jaislamer and Udaipur is around 528 kms.</p>
                    <p>The average time taken by a cab is around 10 hours.</p>
                    <h3>Car Type</h3>
                    <ul>
                        <li>- Hatchback (Indica / Swift / Ritz)</li>
                        <li>- Sedan (Etios / Dzire / Verito)</li>
                        <li>- MPV (Innova / Xylo / Marazzo)</li>
                        <li>- Tempo Traveller (13 seater)</li>
                    </ul>


                    <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>
                        <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                            Learn More or Book Your Ride
                        </Button>
                    </a>
                </Box>

                <Box className="image-group">
                    {/* <img src={carbanner} alt="Camp Banner" className="product-image" /> */}

                    <BannerWrapper>
                        <Slider {...sliderSettings}>
                            {cars_img.map((el, index) => (
                                <Box key={index} px={2}>
                                    <img src={el.imageUrl} alt="Camp Banner" className="product-image" />
                                </Box>
                            ))}
                        </Slider>
                    </BannerWrapper>
                </Box>
            </Box>


            <Box className={'product-outer-container'} >
                <Box className="image-group">
                    {/* <img src={carbanner} alt="Camp Banner" className="product-image" /> */}

                    <BannerWrapper>
                        <Slider {...sliderSettings}>
                            {cars_img.map((el, index) => (
                                <Box key={index} px={2}>
                                    <img src={el.imageUrl} alt="Camp Banner" className="product-image" />
                                </Box>
                            ))}
                        </Slider>
                    </BannerWrapper>
                </Box>
                <Box className="product-details">
                    <h2>Outstation Cab (min. 300 kms) </h2>
                    <p> We also offer outstation cabs for long journeys and we assure you of a safe and a happy trip. The minimum distance to book an outstation cab is 300 kms.
                    </p>
                    <h3>Car Type</h3>
                    <ul>
                        <li>- Hatchback (Indica / Swift / Ritz)</li>
                        <li>- Sedan (Etios / Dzire / Verito)</li>
                        <li>- MPV (Innova / Xylo / Marazzo)</li>
                        <li>- Tempo Traveller (13 seater)</li>
                    </ul>


                    <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>
                        <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                            Get in Touch for the Best Quote
                        </Button>
                    </a>
                </Box>
            </Box>

        </>
    )
}

export default Car