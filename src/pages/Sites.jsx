import React from 'react'
import BannerForAll from '../components/BannerForAll'

import campbanner from '../assets/Images/campbanner.jpg'

import './styles/Sites.css'

import Button from "@mui/material/Button";

import { Box } from '@mui/system';
import { whatsAppUrl } from '../assets/constant';

import biking from '../assets/Images/sites/biking.jpg'
import bornfire from '../assets/Images/sites/bornfire.jpg'
import camel_safari from '../assets/Images/sites/camel-safari.jpg'
import camping from '../assets/Images/sites/camping.jpg'
import desert_safari from '../assets/Images/sites/desert-safari.jpg'
import desert from '../assets/Images/sites/desert.jpg'
import paracelling from '../assets/Images/sites/paracelling.jpg'
import siteseen from '../assets/Images/sites/siteseen.jpg'
import cultural_pro from '../assets/Images/sites/cultural-pro.jpg'


const Sites = () => {
    return (
        <>

            {/* <BannerForAll  title={'Camp Packages'}  subtitle={'Pick a room that best suits your taste and budget.'}  bannerType={'video'} bannerUrl={`https://www.youtube.com/embed/sUr70deofFw?si=NeQQziKtWVbdcNVG`}  /> */}
            <BannerForAll title={'Jaisalmer – The Jewel of the Desert'} subtitle={'Experience Royalty, Adventure, and Serenity in Rajasthan’s Golden City'} bannerType={'video'} bannerUrl={`https://www.youtube.com/embed/vFapg7KmvKw?autoplay=1&mute=1&enablejsapi=1&wmode=opaque`} />

            <a aria-label="Chat on WhatsApp" className='linkng-tag' href={`${whatsAppUrl}`}>
                <Box className={'product-outer-container'} >
                    <Box className="image-group">
                        <img src={siteseen} alt="Camp Banner" className="product-image" />
                    </Box>
                    <Box className="product-details">
                        <h2>Jaisalmer Sightseeing</h2>
                        {/* <h3>Inclusions</h3> */}
                        <p> Step into the past and immerse yourself in the rich history and culture of Jaisalmer with our sightseeing tours. Explore the stunning architecture of the Jaisalmer Fort, a UNESCO World Heritage Site, and marvel at the intricate carvings and stunning sandstone buildings. Visit the stunning Jain Temples, havelis, and museums to learn more about the fascinating history and culture of the region. Our expert guides will take you on a journey through time and offer a glimpse into the vibrant and colorful life of Jaisalmer. Don't miss out on this unforgettable experience - book your Jaisalmer sightseeing tour today!
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
                        <h2>Bonfire And Stargazing</h2>
                        <p> Bask in the mesmerizing beauty of the night sky as you gather around a crackling bonfire with fellow travelers. In a world dominated by technology, there's something magical about lighting dry wood and enjoying the warmth and glow of the flames. The sky above is a canvas of bright stars, providing a breathtaking backdrop for new friendships and unforgettable moments. Join us for an experience that will remind you of the beauty and simplicity of life, and leave you with cherished memories of starry nights under the desert sky.
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

            <a aria-label="Chat on WhatsApp" className='linkng-tag' href={`${whatsAppUrl}`}>
                <Box className={'product-outer-container'} >
                    <Box className="image-group">
                        <img src={camel_safari} alt="Camp Banner" className="product-image" />
                    </Box>
                    <Box className="product-details">
                        <h2>Camel safari</h2>
                        {/* <h3>Inclusions</h3> */}
                        <p> At first, camel riding may seem like a tiring activity, but trust us, it's an experience like no other. As you ride through the vast expanse of the open desert on top of a camel, the cool breeze will caress your skin and the breathtaking views of the sand dunes will stay etched in your mind forever. Our Jaisalmer Tour Packages offer you the opportunity to enjoy this unique adventure, creating memories that you'll cherish for a lifetime. Share your experience with loved ones and friends, and inspire them to explore the magic of Rajasthan's desert landscape.
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
                        <h2>Jeep Safari</h2>
                        <p>  Looking for an exciting way to explore the desert landscape of Jaisalmer? A Jeep Safari is the perfect adventure for you. Our Jeep Safari tours take you deep into the heart of the Thar Desert, where you can experience the stunning sand dunes and vibrant culture of Rajasthan. From the comfort of your jeep, you'll get to witness the awe-inspiring beauty of the desert and encounter local wildlife along the way. Our experienced drivers will guide you through the rough terrain, ensuring your safety and comfort throughout the entire journey. Don't miss out on this thrilling adventure - book your Jaisalmer Jeep Safari today and experience the magic of the desert like never before!
                        </p>
                        {/* <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button> */}
                    </Box>
                    <Box className="image-group">
                        <img src={desert_safari} alt="Camp Banner" className="product-image" />
                    </Box>
                </Box>
            </a>

            <a aria-label="Chat on WhatsApp" className='linkng-tag' href={`${whatsAppUrl}`}>
                <Box className={'product-outer-container'} >
                    <Box className="image-group">
                        <img src={biking} alt="Camp Banner" className="product-image" />
                    </Box>
                    <Box className="product-details">
                        <h2>Quad bike</h2>
                        {/* <h3>Inclusions</h3> */}
                        <p>  Looking for an adrenaline-pumping adventure? Our Jaisalmer Holiday Package offers the perfect opportunity to ride an ATV bike through the stunning sand dunes of Rajasthan. Whether you're a seasoned rider or a beginner, this experience is like no other. The feeling of cruising through the sand dunes on an ATV bike is exhilarating and unique, unlike anything you've ever experienced on the roads. Don't miss out on this chance to try something new and exciting. Book our Jaisalmer Holiday Package and get ready for a thrilling ride that you'll never forget!
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
                        <h2> Parasailing </h2>
                        <p>  If you are Looking for a Verities of adventures that will take your breath absent? Parasailing in Jaisalmer is the perfect activity for thrill-seekers. Soar high above the stunning desert landscape, feeling the rush of wind in your hair as you take in the breathtaking views of the sand dunes below. Our Jaisalmer Parasailing experience is safe and secure, with expert guides ensuring your safety and comfort throughout the entire adventure. It's a truly unique way to experience the beauty and grandeur of the desert. Don't miss out on this unforgettable experience - book your Jaisalmer Parasailing adventure today!
                        </p>
                        {/* <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button> */}
                    </Box>
                    <Box className="image-group">
                        <img src={paracelling} alt="Camp Banner" className="product-image" />
                    </Box>
                </Box>
            </a>
           
            <a aria-label="Chat on WhatsApp" className='linkng-tag' href={`${whatsAppUrl}`}>
                <Box className={'product-outer-container'} >
                    <Box className="image-group">
                        <img src={desert} alt="Camp Banner" className="product-image" />
                    </Box>
                    <Box className="product-details">
                        <h2>Desert Safari</h2>
                        {/* <h3>Inclusions</h3> */}

                        <p>  Experience the heart of Jaisalmer in the most unique and unforgettable way with our Desert Safari. Our cozy tents offer stunning panoramic views of the majestic Sam Sand Dunes, where you can immerse yourself in the royalty and culture of Rajasthan. Our Jeep Safari takes you to the starting point of a camel ride, followed by a delectable Rajasthani meal and an enchanting musical and dance performance under the starry sky. This safari promises to be an adventure like no other, leaving you with cherished memories to last a lifetime.
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
                        <h2>Camping</h2>
                        <p>  Experience the magic of camping amidst the stunning sand dunes of Jaisalmer with our Jaisalmer tour packages. Our Swiss luxury tents and cozy cottages provide the perfect blend of comfort and adventure, while our delicious meal service ensures that you are well-fed and satisfied. The sand dunes are natural wonders, with the sunset painting them in a golden glow that is nothing short of mesmerizing. After a day filled with exploration and adventure, indulge in traditional folk dance performances and delectable meals, making your stay with us delightful and memorable, that you'll cherish forever.
                        </p>
                        {/* <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button> */}
                    </Box>
                    <Box className="image-group">
                        <img src={camping} alt="Camp Banner" className="product-image" />
                    </Box>
                </Box>
            </a>

           
            <a aria-label="Chat on WhatsApp" className='linkng-tag' href={`${whatsAppUrl}`}>
                <Box className={'product-outer-container'} >
                    <Box className="image-group">
                        <img src={cultural_pro} alt="Camp Banner" className="product-image" />
                    </Box>
                    <Box className="product-details">
                        <h2> Cultural Programs </h2>
                        {/* <h3>Inclusions</h3> */}
                        <p>  Experience the vibrant culture of Rajasthan in all its glory with our tour package. The famous song "Padharo Mare Desh" is just a glimpse of the beautiful and rich culture that Rajasthan is known for. After an exhilarating camel ride and desert safari, unwind with a cultural program near your campsite. Local artists will regale you with their mesmerizing folk music, and the colorful cultural dance performances will transport you to a world of wonder and enchantment. Allow yourself to be immersed in the magic of Rajasthan's cultural heritage, making our Jaisalmer tour packages, the best thing that you ever choose.
                        </p>
                        {/* <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button> */}
                    </Box>

                </Box>
            </a>
        </>
    )
}

export default Sites