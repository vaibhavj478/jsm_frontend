import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import {ReactTyped} from "react-typed";
import './styles/BannerForAll.css'; // Assuming the CSS is in this file

const BannerForAll = ({title ,  subtitle  , bannerType ,  bannerUrl ,  isArr=false}) => {

    const [reviews, setReviews] = useState({});
    const [player, setPlayer] = useState(null);

    const getAllReviews = async () => {        
            setReviews({...reviews, bannerType });
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
        {reviews.bannerType === 'video' && (
            <div id="youtube-iframe"></div>
        )}

        {reviews.bannerType === 'image' && (
            <img src={bannerUrl} alt={title} />
        )}

        <Box className="category-title-box">
        <h1 className="category-title"  style={{fontFamily:"Amsterdam"}}  >{title}</h1>
        <h3  className='category-subtitle'  >

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