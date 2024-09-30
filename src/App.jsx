import { useEffect, useState  ,  useRef } from "react";

import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { getProdType } from "./app/productSlice";

import { styled } from '@mui/material/styles';

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography, Button, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import whatsappicon from "./assets/Images/whatsapp.png";
import phoneicon from "./assets/Images/phone.png";
import Home from "./pages/Home";

import Category from "./pages/Category";
import Item from "./pages/Item";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";
import Checkout_complete from "./pages/Checkout_complete";
import Vlog from "./pages/Vlog";

import { Route, Routes, useLocation } from "react-router-dom";
import { border, display, positions, width } from "@mui/system";
import FloatingBall from "./components/FloatingBall";
import Navbar from "./components/Navbar";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import Reviews from "./pages/Reviews";
import Packages from "./pages/Packages";
import ReviewBanner from "./components/reviewsBanner/ReviewBanner";
import Sites from "./pages/Sites";
import Desert_safari from "./pages/Desert_safari";
import Car from "./pages/Car";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


import MenuIcon from "@mui/icons-material/Menu";
import Gallery from "./pages/Gallery";
import Privacy from "./pages/Privacy";

const WhatsAppBtn = styled(Button)({
  boxShadow: 'none',
  width: "50vw",
  border: '0',
  borderRadius: "0",
  fontWeight: "600",
  backgroundColor: '#25d366',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#25d366',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#fff',
    color: '#25d366',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem #25d366',
  },
});
const ContactUsBtn = styled(Button)({
  boxShadow: 'none',
  width: "50vw",
  border: '0',
  borderRadius: "0",
  fontWeight: "600",
  backgroundColor: '#4267B2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#4267B2',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#fff',
    color: '#4267B2',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem #4267B2',
  },
});



function App() {

  const childButtonRef = useRef(null);

  const handleParentButtonClick = () => {
    // Trigger the button click in the child via ref
    if (childButtonRef.current) {
      childButtonRef.current.click(); // This triggers the child button
    }
  };


  const { prodType } = useSelector((state) => state.prod);

  const dispatch = useDispatch();

  const location = useLocation(); // Get the current route location

  useEffect(() => {
    dispatch(getProdType());
  }, []);

  return (
    <>
      <CssBaseline />
      {/* <FloatingBall /> */}
      <Box style={{ maxWidth: "100%" }}>
        <Box style={{ positions: "relative" }} >
          <ResponsiveAppBar />
          <Navbar   buttonRef={childButtonRef}   />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/packages" element={<Packages />}></Route>
            <Route path="/sites" element={<Sites />}></Route>
            <Route path="/desert_safari" element={<Desert_safari />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/pandp" element={<Privacy />}></Route>
            <Route path="/car" element={<Car />}></Route>
            <Route path="/cat/:category" element={<Category />}></Route>
            <Route path="/cat/:category/:item" element={<Item />}></Route>
            <Route path="/basket" element={<Basket />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route
              path="/checkout_complete"
              element={<Checkout_complete />}
            ></Route>
            <Route path="/vlog" element={<Vlog />}></Route>
          </Routes>

          {/* Conditionally render ReviewBanner based on the current route */}
          {location.pathname !== "/reviews" && <ReviewBanner />}


          <Footer />
        </Box>
        <Box className="footerIconsDesktopGroups" >

          <Box className="footerIconsDesktopBtn"  >
            <a style={{ padding: "0", margin: "0", outline: "0", display: 'inline-flex' }} aria-label="Chat on WhatsApp" href="https://wa.me/+919785530017">
              {/* <img width={"100%"}  src={whatsappicon} /> */}

              <WhatsAppIcon className="WhatsAppIconBtn" fontSize="large" color="success" />
            </a>
          </Box>

          <Box className="footerIconsDesktopBtn"  >
            <a style={{ padding: "0", margin: "0", outline: "0", display: 'inline-flex' }} aria-label="phone" href="tel:+919785530017">
              {/* <img width={"100%"} src={phoneicon} /> */}

              <PhoneIphoneIcon className="PhoneIphoneIconBtn"  fontSize="large" color='primary' />
            </a>
          </Box>

        </Box>
        <Box className="footerIconsSocialGroups" >

          <Box className="footerIconsSocialGroupsBtn"  >
            <a style={{ padding: "0", margin: "0", outline: "0", display: 'inline-flex' }} aria-label="Chat on WhatsApp" href="https://www.facebook.com/profile.php?id=61564904201497&mibextid=LQQJ4d">
              <FacebookIcon className="FacebookIconBtn" fontSize="large" color="success" />
            </a>
          </Box>

          <Box className="footerIconsSocialGroupsBtn"  >
            <a style={{ padding: "0", margin: "0", outline: "0", display: 'inline-flex' }} aria-label="phone" href="https://www.instagram.com/jaisalmerdesertcampandsafari?igsh=dnpuN2FjYThwbXh0">
              <InstagramIcon className="InstagramIconBtn"  fontSize="large" color='primary' />
            </a>
          </Box>

        </Box>
        <Box className="footerIconsAppMobileGroups" >

          <Box  className={'footerIconsAppMobileBtn'}  >
            {/* <img width={"100%"}  src={whatsappicon} /> */}
            <IconButton
             // color="#B60071"
              aria-label="menu"
            // onClick={handleDrawerToggle}
            onClick={handleParentButtonClick}
            style={{color:"#fff" }}
            >
              <MenuIcon    />
            </IconButton>
          </Box>

        </Box>
        <Box className={"footerBtnGroups"} >



          <Box >
            <a aria-label="Chat on WhatsApp" href="https://wa.me/+919785530017">
              <WhatsAppBtn  >What's App</WhatsAppBtn>
            </a>
          </Box>
          <Box>
            <a aria-label="phone" href="tel:+919785530017">
              <ContactUsBtn>Contact Us</ContactUsBtn>
            </a>
          </Box>


        </Box>
      </Box>

      {/* <span style={{ display: "inline-block", height: "20px", width: "20px", border: "2px solid black", background: "#FFA62F" }} ></span>
          <span style={{ display: "inline-block", height: "20px", width: "20px", border: "2px solid black", background: "#FFC96F" }} ></span>
          <span style={{ display: "inline-block", height: "20px", width: "20px", border: "2px solid black", background: "#FFE8C8" }} ></span>
          <span style={{ display: "inline-block", height: "20px", width: "20px", border: "2px solid black", background: "#ACD793" }} ></span> */}
    </>
  );
}

export default App;
