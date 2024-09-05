import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, styled } from "@mui/system";
import { Grid, Box, Typography, Button } from "@mui/material";
import InquiryPopup from "./InquiryPopup";

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0),
  textAlign: "center",

  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(3),
  },
}));
const Item = () => {
  const { category, item } = useParams();
  const [itemData, setItemData] = useState([]);
  const [products, setProducts] = useState();

  const fetchItemData = async () => {
    try {
      const url = `http://localhost:8080/api-v1`;
      const response = await axios.get(`${url}/cat-by-name/${item}`);

      setProducts(response.data.products);
      setItemData(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching item data:", error);
    }
  };
  useEffect(() => {

  
  }, [item]);
  // console.log(itemData.description);
  const [showInquiry, setShowInquiry] = useState(false);
  const inquiryPopupHandler = () => {
    setShowInquiry(!showInquiry);
  };
  return (
    <>
      <>
        <Box
          sx={{
            width: "100%",
            height: { xs: "250px", sm: "350px", md: "500px" },
            backgroundImage: `url(${
              itemData.bannerUrl || "default-image-url"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
          }}
        ></Box>
        <Container
          maxWidth="md"
          sx={{
            textAlign: "center",
            mt: { xs: 3, md: 4 },
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            {itemData.title}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ mb: 2, fontWeight: 500 }}
          >
            {itemData.description}
          </Typography>
          <Box
            sx={{
              borderBottom: 2,
              borderColor: "primary.main",
              width: "80px",
              margin: "0 auto",
              mb: 2,
            }}
          ></Box>
        </Container>
      </>

     
      <InquiryPopup open={showInquiry} onClose={inquiryPopupHandler} />
    </>
  );
};

export default Item;
