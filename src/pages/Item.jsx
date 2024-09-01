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
  const [products, setProducts] = useState([]);

  useEffect(() => {
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
    console.log(itemData);
    fetchItemData();
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

      {products.map((item) => {
        return (
          <Box padding={{ xs: 2, sm: 8 }} sx={{ flexGrow: 1 }}>
            <Box
              display={"flex"}
              justifyContent={{ xs: "center", md: "flex-start" }}
              s
            >
              <Typography variant="h4" sx={{ mb: 2 }}>
                {item.title}
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ color: "primary.main", mb: 2 }}>
              starts at ₹1950 per person (min. 2 people)
            </Typography>
            <Box
              display={{ xs: "block", md: "flex" }}
              alignItems={"flex-start"}
            >
              <Box
                width={{ xs: "100%", sm: "80%", md: "608px" }}
                display="flex"
                justifyContent="center"
                mb={2}
                flexDirection="column"
              >
                <Box display="flex" flexWrap="nowarp" justifyContent="center">
                  <Box
                    minWidth={{ xs: "140px", sm: "180px" }}
                    maxWidth={{ xs: "140px", sm: "180px", md: "300px" }}
                    height="200px"
                    flexGrow={1}
                  >
                    <img
                      src={item.media?.[0]?.picUrl || "default-image-url"}
                      alt="Camel Ride"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                  <Box
                    ml={{ xs: 1, sm: 1 }}
                    minWidth={{ xs: "140px", sm: "180px" }}
                    maxWidth={{ xs: "140px", sm: "180px", md: "300px" }}
                    height="200px"
                    flexGrow={1}
                  >
                    <img
                      src={item.media?.[1]?.picUrl || "default-image-url"}
                      alt="Tent"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexWrap="nowrap"
                  justifyContent="center"
                  mt={1}
                >
                  <Box
                    minWidth={{ xs: "140px", sm: "180px" }}
                    maxWidth={{ xs: "140px", sm: "180px", md: "300px" }}
                    height="200px"
                    flexGrow={1}
                  >
                    <img
                      src={item.media?.[2]?.picUrl || "default-image-url"}
                      alt="Cultural Program"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                  <Box
                    ml={{ xs: 1, sm: 1 }}
                    minWidth={{ xs: "140px", sm: "180px" }}
                    maxWidth={{ xs: "140px", sm: "180px", md: "300px" }}
                    height="200px"
                    flexGrow={1}
                  >
                    <img
                      src={item.media?.[3]?.picUrl || "default-image-url"}
                      alt="Cultural Program"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <StyledBox>
                <Typography
                  textAlign={"justify"}
                  marginTop={{ xs: 1, sm: -3 }}
                  variant="body1"
                  sx={{ mb: 1 }}
                >
                  {item.desc1}
                </Typography>
                <Typography
                  textAlign={"justify"}
                  variant="body1"
                  sx={{ mb: 1 }}
                >
                  {item.desc2}
                </Typography>
                <Typography
                  textAlign={"justify"}
                  variant="body1"
                  sx={{ mb: 1 }}
                >
                  {item.desc3}
                </Typography>
                <Box display={"flex"}>
                  <Button
                    textAlign={"justify"}
                    variant="contained"
                    color="primary"
                    onClick={inquiryPopupHandler}
                  >
                    Enquiry now
                  </Button>
                  <Box ml={2}>
                    <Button
                      textAlign={"justify"}
                      variant="contained"
                      color="primary"
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </StyledBox>
            </Box>
          </Box>
        );
      })}
      <InquiryPopup open={showInquiry} onClose={inquiryPopupHandler} />
    </>
  );
};

export default Item;
