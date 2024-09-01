import { useEffect, useState } from "react";

import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { getProdType } from "./app/productSlice";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Bill from "./pages/Bill";
import Product from "./pages/Product";

import Home from "./pages/Home";

import Category from "./pages/Category";
import Item from "./pages/Item";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";
import Checkout_complete from "./pages/Checkout_complete";
import Vlog from "./pages/Vlog";

import { Route, Routes } from "react-router-dom";
import { display, width } from "@mui/system";
import FloatingBall from "./components/FloatingBall";
import Navbar from "./components/Navbar";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Footer from "./components/Footer";
import Reviews from "./pages/Reviews";

function App() {
  const { prodType } = useSelector((state) => state.prod);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProdType());
  }, []);

  return (
    <>
      <CssBaseline />
      {/* <FloatingBall /> */}
      <Box style={{ maxWidth: "100%" , fontFamily: 'Amsterdam, sans-serif'  }}>
        <Box >
          <ResponsiveAppBar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
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
          <Footer />
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
