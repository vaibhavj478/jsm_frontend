import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import url from '../app/url';
import './styles/Reviews.css'; // Assuming the CSS is in this file

const Reviews = () => {
    const [reviews, setReviews] = useState({});
    const [player, setPlayer] = useState(null);

    const getAllReviews = async () => {
        const res = await axios(`${url}/cat-by-name/reviews`);
        if (res.data.success) {
            setReviews({ ...res.data.category });
        }
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
        const videoID = extractVideoID(reviews.bannerUrl);
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
                    <img src={reviews.bannerUrl} alt={reviews.title} />
                )}

                <Box className="category-title-box">
                <h1 className="category-title" >{reviews.title}</h1>
                <h3  className='category-subtitle'  >{reviews.nickname}</h3>
                </Box>
            
            </Box>

            <div>Reviews</div>
           
        </>
    );
};

export default Reviews;
