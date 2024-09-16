// // src/components/ParallaxSection.js

// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Button, Card, CardContent, CardMedia, Container } from '@mui/material';
// import { Parallax } from 'react-parallax';
// import { styled } from '@mui/system';
// import bannerImage from "../assets/Images/bg.jpg";

// // Styled components
// const SectionContainer = styled(Box)(({ theme }) => ({
//   position: 'relative',
//   overflow: 'hidden',
//   padding: theme.spacing(4),
//   textAlign: 'center',
// }));

// const BackgroundText = styled(Typography)(({ theme }) => ({
//   position: 'absolute',
//   top: '10%', // Position from the top
//   left: '10%', // Position from the left
//   transform: 'translate(-50%, -50%)',
//   fontSize: '20rem',
//   color: '#fff',
//   opacity: 0.2, // Slightly more visible
//   whiteSpace: 'nowrap',
//   zIndex: 1, // Ensure it is behind the cards
//   pointerEvents: 'none',
//   [theme.breakpoints.down('sm')]: {
//     fontSize: '5rem',
//   },
// }));

// const ParallaxCard = styled(Card)(({ theme }) => ({
//   position: 'relative',
//   overflow: 'hidden',
//   transform: 'translateY(0)',
//   transition: 'transform 0.5s ease-in-out',
//   marginBottom: theme.spacing(4),
//   zIndex: 2, // Ensure the cards are above the background text
//   width: '60%',
//   [theme.breakpoints.down('md')]: {
//     marginBottom: theme.spacing(3),
//   },
// }));

// const CardImage = styled(CardMedia)(({ theme }) => ({
//   height: '140px',
//   transition: 'transform 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.1)', // Zoom effect on hover
//   },
// }));

// const ZigZagContainer = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   [theme.breakpoints.up('md')]: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   '& > div:nth-of-type(odd)': {
//     [theme.breakpoints.up('md')]: {
//       transform: 'translateX(-10%)', // Move odd cards left for zig-zag
//     },
//   },
//   '& > div:nth-of-type(even)': {
//     [theme.breakpoints.up('md')]: {
//       transform: 'translateX(10%)', // Move even cards right for zig-zag
//     },
//   },
// }));

// const ParallaxSection = () => {
//   const [scrollY, setScrollY] = useState(0);

//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const backgroundTextStyle = {
//     transform: `translate(-50%, -50%) translate(${scrollY * 0.3}px, ${scrollY * 0.3}px)`, // Move text left to right and top to bottom
//   };

//   return (
//     <SectionContainer>
//       <Parallax blur={0} bgImage={bannerImage} strength={500}>
//         <BackgroundText
//           variant="h1"
//           sx={backgroundTextStyle}
//         >
//           JAISALMER
//         </BackgroundText>

//         <Container>
//           <Typography variant="h2" gutterBottom>
//             Heading
//           </Typography>
//           <Typography variant="h5" gutterBottom>
//             Subheading
//           </Typography>

//           <ZigZagContainer>
//             {[1, 2, 3, 4, 5, 6].map((item) => (
//               <ParallaxCard key={item}>
//                 <CardImage
//                   component="img"
//                   image={`https://via.placeholder.com/300x140?text=Image+${item}`}
//                   alt={`Card Image ${item}`}
//                 />
//                 <CardContent>
//                   <Typography variant="h6">Card Title {item}</Typography>
//                   <Typography variant="subtitle1">Card Subtitle {item}</Typography>
//                   <Typography variant="body2">
//                     This is a description for card {item}. It contains some details and information.
//                   </Typography>
//                   <Button variant="contained" color="primary" sx={{ mt: 2 }}>
//                     Learn More
//                   </Button>
//                 </CardContent>
//               </ParallaxCard>
//             ))}
//           </ZigZagContainer>
//         </Container>
//       </Parallax>
//     </SectionContainer>
//   );
// };

// export default ParallaxSection;


// src/components/ParallaxSection.js

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CardMedia, Container } from '@mui/material';
import { Parallax } from 'react-parallax';
import { maxWidth, styled } from '@mui/system';
import bannerImage from "../assets/Images/bg.jpg";
import pca1 from "./pca1.jpg";
import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import pic4 from "./pic4.jpg";
import { whatsAppUrl } from '../assets/constant';

// Styled components
const SectionContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const BackgroundText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '10%', // Position from the top
  left: '10%', // Position from the left
  transform: 'translate(-50%, -50%)',
  fontSize: '20rem',
  color: '#fff',
  opacity: 0.2, // Slightly more visible
  whiteSpace: 'nowrap',
  zIndex: 1, // Ensure it is behind the cards
  pointerEvents: 'none',
  [theme.breakpoints.down('sm')]: {
    fontSize: '5rem',
  },
}));

// const ParallaxCard = styled(Card)(({ theme }) => ({
//   position: 'relative',
//   overflow: 'hidden',
//   transform: 'translateY(0)',
//   transition: 'transform 0.5s ease-in-out',
//   marginBottom: theme.spacing(4),
//   zIndex: 2, // Ensure the cards are above the background text
//   width: '55%',
//   [theme.breakpoints.down('md')]: {
//     marginBottom: theme.spacing(3),
//   },
// }));

const ParallaxCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  transform: 'translateY(0)',
  transition: 'transform 0.5s ease-in-out',
  marginBottom: theme.spacing(4),
  zIndex: 2, // Ensure the cards are above the background text
  width: '100%', // Full width in smaller screens
  maxWidth: '600px', // Max width to limit card size on larger screens
  [theme.breakpoints.up('md')]: {
    // Flex properties for larger screens
    width: 'calc(50% - 16px)', // Adjust width and margin for two-column layout
    margin: theme.spacing(2), // Margin between cards in row layout
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  [theme.breakpoints.down('md')]: {
    // Stack cards vertically in smaller screens
    marginBottom: theme.spacing(3),
    maxWidth:"300px"
  },
}));

const CardImage = styled(CardMedia)(({ theme }) => ({
  // height: '140px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)', // Zoom effect on hover
  },
}));

const ZigZagContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  '& > div:nth-of-type(odd)': {
    [theme.breakpoints.up('md')]: {
      transform: 'translateX(-10%)', // Move odd cards left for zig-zag
    },
  },
  '& > div:nth-of-type(even)': {
    [theme.breakpoints.up('md')]: {
      transform: 'translateX(10%)', // Move even cards right for zig-zag
    },
  },
}));

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundTextStyle = {
    transform: `translate(-50%, -50%) translate(${scrollY * 0.3}px, ${scrollY * 0.3}px)`, // Move text left to right and top to bottom
  };

  return (
    <SectionContainer>
      <Parallax 
        blur={0} 
        bgImage={bannerImage} 
        strength={400} // Reduced strength for less zoom
        style={{ 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <BackgroundText
          variant="h1"
          sx={backgroundTextStyle}
        >
          JAISALMER
        </BackgroundText>

        <Container>
          <Typography style={{color:"white" ,  fontFamily:"Amsterdam"  ,  marginTop:"3.5rem" , marginBottom:"3.5rem"  }} variant="h2" gutterBottom>
          Our Packages
          </Typography>
          <Typography variant="h5" gutterBottom 
          style={{color:"white" ,      marginBottom:"2rem"  }}
          >
            Royal Adventure offers well managed plan tour packages in jaisalmer. Our travel tour services is not costly as compare to other travel agents. Jaisalmer is the main attraction of Desert Rajasthan.
          </Typography>

          <ZigZagContainer>
            {[1, ].map((item) => (
              <ParallaxCard key={item}>
                <CardImage
                  component="img"
                  image={pca1}
                  alt={`Card Image ${item}`}
                />
                <CardContent>
                  <Typography variant="h6">Padharo Jaisalmer</Typography>
                  <Typography variant="subtitle1">2 Nights & 3 Days</Typography>
                  <Typography variant="body2">
                  Planning for 2 nights and 3 days in Jaisalmer, then Padharo Jaisalmer is top selling package to cover all tourist destinationof Jaisalmer and sand dunes.
                  </Typography>
                  <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>    
                    <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button>
                    </a>

                    
                </CardContent>
              </ParallaxCard>
            ))}


<ParallaxCard >
                <CardImage
                  component="img"
                  image={pic2}
                  alt={`Card Image `}
                />
                <CardContent>
                  <Typography variant="h6">Golden Triangle Tour</Typography>
                  <Typography variant="subtitle1"> 3 Nights & 4 Days</Typography>
                  <Typography variant="body2">
                  If you are planning to visit Jaisalmer and jodhpur, then Royal Adventure is right website to offer you complete tour covering all major historical tourist places.
                  </Typography>
                  <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>    
                    <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button>
                    </a>
                </CardContent>
              </ParallaxCard>


              <ParallaxCard >
                <CardImage
                  component="img"
                  image={pic3}
                  alt={`Card Image`}
                />
                <CardContent>
                  <Typography variant="h6">Desert Triangle Tour </Typography>
                  <Typography variant="subtitle1">5 Nights & 6 Days</Typography>
                  <Typography variant="body2">
                  Best way to explore the beauty of the Thar sand dunes Desert, stay long in Desert with this package covering Jodhpur, Jaisalmer, Ranakpur & Udaipur.
                  </Typography>
                  <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>    
                    <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button>
                    </a>
                </CardContent>
              </ParallaxCard>

              <ParallaxCard >
                <CardImage
                  component="img"
                  image={pic4}
                  alt={`Card Image `}
                />
                <CardContent>
                  <Typography variant="h6">Adventure Tour</Typography>
                  <Typography variant="subtitle1">6 Nights & 7 Days</Typography>
                  <Typography variant="body2">
                  Desert Safari, Camel Safari and Jeep Safari is adventures part of tour packages in Jaisalmer. If you have fun of adventure then Join this package.
                  </Typography>
                  <a aria-label="Chat on WhatsApp" href={`${whatsAppUrl}`}>    
                    <Button className="book-now-button" variant="contained" sx={{ padding: "0.5rem 1rem", backgroundColor: "#FFB200", marginTop: "1rem" }}>
                        Book Now
                    </Button>
                    </a>
                </CardContent>
              </ParallaxCard>

          </ZigZagContainer>
        </Container>
      </Parallax>
    </SectionContainer>
  );
};

export default ParallaxSection;
