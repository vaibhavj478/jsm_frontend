import { useEffect, useState } from "react";

import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { getProdType } from "./app/productSlice";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import whatsappicon from "./assets/Images/whatsapp.png";
import phoneicon from "./assets/Images/phone.png";
import Home from "./pages/Home";

import Category from "./pages/Category";
import Item from "./pages/Item";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";
import Checkout_complete from "./pages/Checkout_complete";
import Vlog from "./pages/Vlog";

import { Route, Routes ,  useLocation } from "react-router-dom";
import { display, width } from "@mui/system";
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

function App() {
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
      <Box style={{ maxWidth: "100%"   }}>
        <Box >
          <ResponsiveAppBar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/packages" element={<Packages />}></Route>
            <Route path="/sites" element={<Sites />}></Route>
            <Route path="/desert_safari" element={<Desert_safari />}></Route>
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
        <Box sx={{ position: "fixed", bottom: "20px", right: "10px",zIndex:'1',display:'flex' ,flexDirection:"column",alignItems:'center' }}>
      <Box><a aria-label="phone" href="tel:+919785530017">
          <img width={50} height={50} src={phoneicon} />
        </a></Box>
        <Box><a aria-label="Chat on WhatsApp" href="https://wa.me/+919785530017">
          <img width={60} height={60} src={whatsappicon} />
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
