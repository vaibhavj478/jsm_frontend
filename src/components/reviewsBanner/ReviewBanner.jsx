import React from 'react';
import { Box, Card, CardContent, Typography, Rating } from '@mui/material';
import Slider from 'react-slick';
import styled from '@emotion/styled';

// Slider Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ReviewBanner.css"

// Styled component for the banner container
const BannerWrapper = styled(Box)`
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 40px 20px;
 
`;

// Card component style
const ReviewCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const ReviewImage = styled('img')`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
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

const reviews = [
    {
        name: "Ayesha Khan",
        location: "Maharashtra, India",
        rating: 4.5,
        review: "Our trip to Jaisalmer was nothing short of magical! The camel safari at sunset was a once-in-a-lifetime experience. The service was impeccable, making our desert adventure truly unforgettable.",
        imageUrl: "https://via.placeholder.com/80",
        punchLine :  "Magical sunsets, unforgettable adventures."
    },
    {
        name: "John Smith",
        location: "California, USA",
        rating: 5,
        review: "Exploring the golden city of Jaisalmer with this tour was fantastic! The guides were knowledgeable, and the accommodations were top-notch. Truly an immersive experience in Rajasthan's rich culture.",
        imageUrl: "https://via.placeholder.com/80",
          punchLine :  "Magical sunsets, unforgettable adventures."
    },
    {
        name: "Priya Verma",
        location: "Karnataka, India",
        rating: 5,
        review: "Jaisalmer’s forts and havelis are breathtaking, but it was the exceptional service that made our trip special. Every detail was taken care of, allowing us to enjoy the beauty of the Thar Desert.",
        imageUrl: "https://via.placeholder.com/80",
          punchLine :  "A golden journey in the heart of Rajasthan."
    },
    {
        name: "Lars Eriksson",
        location: "Stockholm, Sweden",
        rating: 5,
        review: "This tour made our Jaisalmer experience truly memorable. From the desert safari to the cultural performances, everything was well-organized and exceeded our expectations. Highly recommend!",
        imageUrl: "https://via.placeholder.com/80",
          punchLine : "Where culture meets comfort in Jaisalmer."
    },
    {
        name: "Neha Patel",
        location: "Gujarat, India",
        rating: 5,
        review: "An extraordinary journey through Jaisalmer’s history and culture. The attention to detail in planning and execution was impeccable, making our stay in the golden city a breeze.",
        imageUrl: "https://via.placeholder.com/80",
          punchLine : "Desert dreams brought to life."
    },
 
    {
        name: "Mark Thompson",
        location: "Queensland, Australia",
        rating: 5,
        review: "A perfect blend of adventure and relaxation. The Thar Desert safari was a highlight, and the hospitality was exceptional. We left Jaisalmer with memories that will last a lifetime.",
        imageUrl: "https://via.placeholder.com/80",
          punchLine :   "Experience Jaisalmer like never before."
    },
    {
        name: "Radhika Sharma",
        location: "Punjab, India",
        rating: 5,
        review: "Our Jaisalmer tour was well-planned and executed flawlessly. The guides were friendly and knowledgeable, making our exploration of the city’s rich heritage a delightful experience.",
        imageUrl: "https://via.placeholder.com/80",
          punchLine :  "Heritage, history, and heartwarming service."
    },
    {
        name: "Emily Brown",
        location: "Ontario, Canada",
        rating: 5,
        review: "Jaisalmer is a gem, and this tour brought out its best! From the historical forts to the local cuisine, everything was curated with care. Exceptional service throughout our journey.",
        imageUrl: "https://via.placeholder.com/80",
          punchLine :  "Uncover Jaisalmer’s treasures with us."
    },
    {
        name: "Kunal Deshmukh",
        location: "Madhya Pradesh, India",
        rating: 5,
        review: "The desert safari under the stars was a highlight of our trip to Jaisalmer. The entire experience was seamless, with top-notch service and expert guidance. Truly a journey to remember.",
        imageUrl: "https://via.placeholder.com/80",
          punchLine : "Stars, sand, and seamless service."
    },
    {
        name: "Isabella Rossi",
        location: "Tuscany, Italy",
        rating: 5,
        review: "Our trip to Jaisalmer was a perfect blend of culture, adventure, and luxury. The staff went above and beyond to ensure we had an unforgettable experience. Highly recommend their services!",
        imageUrl: "https://via.placeholder.com/80",
          punchLine :   "Luxury meets adventure in the golden city."
    },
  
];

const ReviewBanner = () => {
    return (

        <>
            <BannerWrapper>


                {/* Heading */}
                <Typography  sx={{textAlign: 'center', fontFamily:"Amsterdam" ,   color: '#B60071'}}  variant="h4" component="h2" gutterBottom >
                What does our community say?
                </Typography>

                {/* Subheading  #FFB200 #EB5B00 #E4003A  */}
                <Typography m={1} sx={{textAlign: 'center' ,  color: '#E4003A'  }} variant="subtitle1" color="textSecondary" paragraph>
                Guest Experiences: Exploring Jaisalmer with Our Tour and Travel Services.
                </Typography>


                <Slider {...sliderSettings}>
                    {reviews.map((review, index) => (
                        <Box key={index} px={2}>
                            <ReviewCard>
                                <ReviewImage src={review.imageUrl} alt={review.name} />
                                <CardContent>
                                    <Typography  variant="h6">{review.name}</Typography>
                                    <Typography sx={{color:"#E4003A"}} variant="body2" color="textSecondary">
                                        {review.location}
                                    </Typography>
                                    <Rating value={review.rating} precision={0.5} readOnly />
                                    <Typography variant="body1" mt={2}>
                                        {review.review}
                                    </Typography>
                                </CardContent>
                            </ReviewCard>
                        </Box>
                    ))}
                </Slider>
            </BannerWrapper>




        </>
    )
}

export default ReviewBanner