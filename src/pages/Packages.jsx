import React from 'react'
import BannerForAll from '../components/BannerForAll'

import campbanner from '../assets/Images/campbanner.jpg'

import './styles/Packages.css'

import Button from "@mui/material/Button";

import { Box } from '@mui/system';
import { whatsAppUrl } from '../assets/constant';

const Packages = () => {
    return (
        <>

            {/* <BannerForAll  title={'Camp Packages'}  subtitle={'Pick a room that best suits your taste and budget.'}  bannerType={'video'} bannerUrl={`https://www.youtube.com/embed/sUr70deofFw?si=NeQQziKtWVbdcNVG`}  /> */}
            <BannerForAll title={'Camp Packages'} subtitle={'Pick a room that best suits your taste and budget.'} bannerType={'image'} bannerUrl={`${campbanner}`} />



            <Box className={'product-outer-container'} >
                <Box className="image-group">
                    <img src={campbanner} alt="Camp Banner" className="product-image" />
                </Box>
                <Box className="product-details">
                    <h2>Maharaja Tent with Bath Tub</h2>
                    <h3>Inclusions</h3>
                    <ul>
                        <li>- Night Stay at Desert Camp</li>
                        <li>- Tent with attached Washroom & Air Conditioner</li>
                        <li>- Swimming Pool at Campsite</li>
                        <li>- Camel Safari at Sunset Point or Sunrise Point</li>
                        <li>- Rajasthani welcome with Aarti Tika</li>
                        <li>- Welcome drinks on arrival</li>
                        <li>- Cultural Events (Folk dance and live music)</li>
                        <li>- Bon Fire</li>
                        <li>- Rajasthani Pure Veg Buffet Dinner</li>
                        <li>- Breakfast at Campsite</li>
                    </ul>
                    <p>Experience peak luxury in our Maharaja Tent with Bath Tub accommodations. Inspired by Indian majesty, these spacious canopies exude regal elegance with ornate tapestries, elegant furnishings, and exquisite artwork, offering a truly indulgent and refined ambiance. Unwind on a sumptuous king-sized bed with fine linens for peaceful sleep, and relax in a private seating area amidst nature's serene beauty.
                    </p>
                    <p>Every detail within the Maharaja Tent with Bath Tub is meticulously crafted to create an atmosphere of regality and tranquility. Escape everyday demands and embrace luxury in this sanctuary. Modern amenities include private restrooms with hot showers and lavish toiletries, enhancing your pampering experience.</p>
                    <p>Immerse yourself in opulent comfort, create cherished memories, and rediscover camping with a touch of grandeur. This is the epitome of luxury and refinement, reimagining the camping experience for those seeking uncompromising elegance.</p>
                    <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>    
                    <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button>
                    </a>
                </Box>




            </Box>
            <Box className={'product-outer-container'} >
              
                <Box className="product-details">
                    <h2>Maharaja Tent</h2>
                    <h3>Inclusions</h3>
                    <ul>
                    <li>- Night Stay at Desert Camp</li>
                        <li>- Tent with attached Washroom & Air Conditioner</li>
                        <li>- Swimming Pool at Campsite</li>
                        <li>- Camel Safari at Sunset Point or Sunrise Point</li>
                        <li>- Rajasthani welcome with Aarti Tika</li>
                        <li>- Welcome drinks on arrival</li>
                        <li>- Cultural Events (Folk dance and live music)</li>
                        <li>- Bon Fire</li>
                        <li>- Rajasthani Pure Veg Buffet Dinner</li>
                        <li>- Breakfast at Campsite</li>
                    </ul>
                    <p>Experience peak luxury in our Maharaja Tent with Bath Tub accommodations. Inspired by Indian majesty, these spacious canopies exude regal elegance with ornate tapestries, elegant furnishings, and exquisite artwork, offering a truly indulgent and refined ambiance. Unwind on a sumptuous king-sized bed with fine linens for peaceful sleep, and relax in a private seating area amidst nature's serene beauty.
                    </p>
                    <p>Every detail within the Maharaja Tent with Bath Tub is meticulously crafted to create an atmosphere of regality and tranquility. Escape everyday demands and embrace luxury in this sanctuary. Modern amenities include private restrooms with hot showers and lavish toiletries, enhancing your pampering experience.</p>
                    <p>Immerse yourself in opulent comfort, create cherished memories, and rediscover camping with a touch of grandeur. This is the epitome of luxury and refinement, reimagining the camping experience for those seeking uncompromising elegance.</p>
                    <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>    
                    <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button>
                    </a>
                </Box>

                <Box className="image-group">
                    <img src={campbanner} alt="Camp Banner" className="product-image" />
                </Box>


            </Box>
            <Box className={'product-outer-container'} >
                <Box className="image-group">
                    <img src={campbanner} alt="Camp Banner" className="product-image" />
                </Box>
                <Box className="product-details">
                    <h2>Luxury Swiss Tent</h2>
                    <h3>A Perfect Getaway</h3>
                    <ul>
                        <li>- Pick From Bus Station Jaisalmer & Drop to Hotel After Wash and Change Visit Badabagh & Kuldhara Village And Check In Camp</li>
                        <li>- Evening Camel Safari</li>
                        <li>- Sunset View on Dunes After Sunset Come Back to camp</li>
                        <li>- Traditional Welcome and tikka dasturi</li>
                        <li>- Evening Tea Coffee Snacks</li>
                        <li>- Dj Group dance</li>
                        <li>- Rajasthani Dance</li>
                        <li>- Night Stay 01 Swiss Super Deluxe Tent With Attached Bathroom</li>
                        <li>- 24 Hours running Water</li>
                        <li>- Bed Tea</li>
                        <li>- Jeep Safari</li>
                        <li>- Morning Breakfast</li>
                    </ul>
                    <p>After Check Out From Camp Will ProceedTo Visit Beautiful Golden Jaisalmer Monuments jaisalmer Fort, Patwon Ki Haveli, Salim Singh Haveli, Jain Temple, Gadisagar Lake.</p>
                    <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>       
                    <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button>
                    </a>
                </Box>




            </Box>
            <Box className={'product-outer-container'} >

                <Box className="product-details">
                    <h2>Luxury Swiss Cottage</h2>
                    <h3>A Perfect Getaway</h3>
                    <ul>
                        <li>- Pick From Bus Station Jaisalmer & Drop to Hotel After Wash and Change Visit Badabagh & Kuldhara Village And Check In Camp</li>
                        <li>- Evening Camel Safari</li>
                        <li>- Sunset View on Dunes After Sunset Come Back to camp</li>
                        <li>- Traditional Welcome and tikka dasturi</li>
                        <li>- Evening Tea Coffee Snacks</li>
                        <li>- Rajasthani Dance</li>
                        <li>- Night Stay 01 Swiss Super Deluxe Tent With Attached Bathroom</li>
                        <li>- 24 Hours running Water</li>
                        <li>- Bed Tea</li>
                        <li>- Jeep Safari</li>
                        <li>- Morning Breakfast</li>

                    </ul>
                    <p>After Check Out From Camp Will ProceedTo Visit Beautiful Golden Jaisalmer Monuments jaisalmer Fort, Patwon Ki Haveli, Salim Singh Haveli, Jain Temple, Gadisagar Lake.</p>
                    <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>     
                    <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button>
                    </a>
                </Box>


                <Box className="image-group">
                    <img src={campbanner} alt="Camp Banner" className="product-image" />
                </Box>
            </Box>
            <Box className={'product-outer-container'} >
                <Box className="image-group">
                    <img src={campbanner} alt="Camp Banner" className="product-image" />
                </Box>
                {/* <Box className="product-details">
                    <h2>Swiss Camp</h2>
                    <p>Product description goes here. Highlight the features, benefits, and anything else that would entice the customer.</p>
                </Box> */}

                <Box className="product-details">
                    <h2>Mobile Camping</h2>
                    <p>We offer an experience to enjoy under the clear night sky with the sight of twinkling stars. The mobile tents can be set up as per the visitor's needs.</p>
                    <h3>Highlights of Mobile Tent :</h3>
                    <ul>
                        <li>- They are comfortable</li>
                        <li>- Easy to set up anywhere</li>
                        <li>- It includes a common washroom</li>
                        <li>- Comfortable mattresses and warm blankets available.</li>
                    </ul>
                    <h3>OUR MAIN MOTTO IS QUALITY AND SERVICE.</h3>
                    <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>    
                    <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button>
                    </a>
                </Box>

            </Box>






        </>
    )
}

export default Packages