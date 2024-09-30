import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { ReactTyped } from "react-typed";
import './styles/BannerForAll.css'; // Assuming the CSS is in this file


import Slider from 'react-slick';

// Slider Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Review cards slider configuration
const sliderSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true
};


// images 

import trail1 from '../assets/Images/banner_trail/trail1.jpg'
import trail2 from '../assets/Images/banner_trail/trail2.jpg'
import trail3 from '../assets/Images/banner_trail/trail3.jpg'
import trail4 from '../assets/Images/banner_trail/trail4.jpg'
import trail5 from '../assets/Images/banner_trail/trail5.jpg'
import trail6 from '../assets/Images/banner_trail/trail6.jpg'
import trail7 from '../assets/Images/banner_trail/trail7.jpg'
import trail8 from '../assets/Images/banner_trail/trail8.jpg'
import trail9 from '../assets/Images/banner_trail/trail9.jpg'
import trail10 from '../assets/Images/banner_trail/trail10.jpg'
import trail11 from '../assets/Images/banner_trail/trail11.jpg'
import trail12 from '../assets/Images/banner_trail/trail12.jpg'
import trail13 from '../assets/Images/banner_trail/trail13.jpg'
import trail14 from '../assets/Images/banner_trail/trail14.jpg'
import trail15 from '../assets/Images/banner_trail/trail15.jpg'
import trail16 from '../assets/Images/banner_trail/trail16.jpg'
import trail17 from '../assets/Images/banner_trail/trail17.jpg'
import trail18 from '../assets/Images/banner_trail/trail18.jpg'
import trail19 from '../assets/Images/banner_trail/trail19.jpg'
import trail20 from '../assets/Images/banner_trail/trail20.jpg'
import trail21 from '../assets/Images/banner_trail/trail21.jpg'
import trail22 from '../assets/Images/banner_trail/trail22.jpg'
import trail23 from '../assets/Images/banner_trail/trail23.jpg'
import trail24 from '../assets/Images/banner_trail/trail24.jpg'
import trail25 from '../assets/Images/banner_trail/trail25.jpg'
import trail26 from '../assets/Images/banner_trail/trail26.jpg'
import trail27 from '../assets/Images/banner_trail/trail27.jpg'
import trail28 from '../assets/Images/banner_trail/trail28.jpg'
import trail29 from '../assets/Images/banner_trail/trail29.jpg'
import trail30 from '../assets/Images/banner_trail/trail30.jpg'
import trail31 from '../assets/Images/banner_trail/trail31.jpg'
import trail32 from '../assets/Images/banner_trail/trail32.jpg'
import trail33 from '../assets/Images/banner_trail/trail33.jpg'
import trail34 from '../assets/Images/banner_trail/trail34.jpg'
import trail35 from '../assets/Images/banner_trail/trail35.jpg'
import trail36 from '../assets/Images/banner_trail/trail36.jpg'
import trail37 from '../assets/Images/banner_trail/trail37.jpg'
import trail38 from '../assets/Images/banner_trail/trail38.jpg'



const BannerForAll = ({ title, subtitle, bannerType, bannerUrl, isArr = false }) => {

    const [reviews, setReviews] = useState({});
    const [player, setPlayer] = useState(null);
  
    const [Images ,  setImages] = useState([    
        trail1,
        trail2,
        trail3,
        trail4,
        trail5,
        trail6,
        trail7,
        trail8,
        trail9,
        trail10,
        trail11,
        trail12,
        trail13,
        trail14,
        trail15,
        trail16,
        trail17,
        trail18,
        trail19,
        trail20,
        trail21,
        trail22,
        trail23,
        trail24,
        trail25,
        trail26,
        trail27,
        trail28,
        trail29,
        trail30,
        trail31,
        trail32,
        trail33,
        trail34,
        trail35,
        trail36,
        trail37,
        trail38,

    ]);

    const getAllReviews = async () => {
        setReviews({ ...reviews, bannerType });
    };

    useEffect(() => {
         getAllReviews();
    }, []);

    useEffect(() => {
        if (reviews.bannerType === 'video') {
            if (window.YT) {
                // Ensure the YouTube API is ready
                initializePlayer();
            } else {
                // Load the YouTube IFrame API script
                const script = document.createElement('script');
                script.src = 'https://www.youtube.com/iframe_api';
                script.onload = initializePlayer;
                document.body.appendChild(script);
            }
        }
    }, [reviews]);


    const initializePlayer = () => {
        const videoID = extractVideoID(bannerUrl);
        if (videoID) {
            const newPlayer = new window.YT.Player('youtube-iframe', {
                videoId: videoID,
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    mute: 1,
                    loop: 1,
                    playlist: videoID
                },
                events: {
                    'onReady': (event) => {
                        event.target.playVideo();
                    }
                }
            });
            setPlayer(newPlayer);
        }
    };

    const extractVideoID = (url) => {
        const videoIDMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return videoIDMatch ? videoIDMatch[1] : null;
    };


  


    return (

        <>
            <Box className="banner-box">
                {bannerType === 'video' && (
                    <div id="youtube-iframe"></div>
                )}




                {
                bannerType === 'image' && bannerUrl.length == 0  ? (
                    <Slider {...sliderSettings}>
                        {Images.map((url, index) => (
                         <>
                          <img  key={index} style={{position:"static"}}  src={url} alt={title} />
                         </>  
                        ))}
                    </Slider>
                    ) : bannerType === 'image' && (
                    <img src={bannerUrl} alt={title} />
                    )
                }




                <Box className="category-title-box">
                    <h1 className="category-title" style={{ fontFamily: "Amsterdam" }}  >{title}</h1>
                    <h3 className='category-subtitle'  >

                        {isArr ?
                            <ReactTyped
                                strings={
                                    subtitle
                                }
                                typeSpeed={100}
                                loop
                                backSpeed={50}
                                cursorChar="|"
                                showCursor={true}
                            />
                            :
                            <ReactTyped
                                strings={[
                                    subtitle,
                                ]}
                                typeSpeed={100}
                                loop
                                backSpeed={50}
                                cursorChar="|"
                                showCursor={true}
                            />
                        }

                    </h3>
                </Box>

            </Box>

            {/* <div>BannerForAll</div> */}

        </>
    )
}

export default BannerForAll