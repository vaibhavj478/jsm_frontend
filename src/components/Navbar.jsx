import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import logo from "./../assets/video/logo.mp4";
import logo from "../assets/video/logo.mp4";
import axios from "axios";
import { border, fontWeight, margin, padding, Stack } from "@mui/system";

import { styled } from '@mui/material/styles';

const CListItem = styled(ListItem)({

  transition: "all 0.5s",

  '&:hover': {
    backgroundColor: '#E0CCBE',
    color: '#B60071',
    boxShadow: 'none',
    fontWeight: "600"
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#E0CCBE',
    color: '#B60071',
    fontWeight: "600"

  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api-v1/cat");
        setMenuItems(response.data.category);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuItemClick = (item) => {
    setActiveItem(item.name);
    navigate(`/category/${item.name}`);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };
  const handleHomeClick = (value) => {
    setActiveItem("Home");
    navigate(value);
  };
  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const dropdownItems = ["Option 1", "Option 2", "Option 3"];

  const drawer = (
    <div onClick={handleDrawerToggle}

      style={{ color: "#FFB200", padding: "0", width: "100%" }}

    >
      <List

        style={{ width: "100%" }}
      >
        <CListItem
          button
          onClick={() => handleHomeClick("/")}

          style={{ textAlign: "center" }}
        >
          <ListItemText primary="Home" />
        </CListItem>

        <CListItem
          button
          onClick={() => handleHomeClick("/packages")}
          style={{ textAlign: "center" }}
        >
          <ListItemText primary="Packages" />
        </CListItem>

        <CListItem
          button
          onClick={() => handleHomeClick("/sites")}
          style={{ textAlign: "center" }}
        >
          <ListItemText primary="Place To Vist" />

        </CListItem>
        <CListItem
          button
          onClick={() => handleHomeClick("/desert_safari")}
          style={{ textAlign: "center" }}
        >
          <ListItemText primary="Desert Safari" />

        </CListItem>
        <CListItem
          button
          onClick={() => handleHomeClick("/car")}
          style={{ textAlign: "center" }}
        >
          <ListItemText primary="Car Rental" />

        </CListItem>
        <CListItem
          button
          onClick={() => handleHomeClick("/")}
          style={{ textAlign: "center" }}
        >
          <ListItemText primary="Gallery" />

        </CListItem>
        <CListItem
          button
          onClick={() => handleHomeClick("/reviews")}
          style={{ textAlign: "center" }}
        >
          <ListItemText primary="Reviews" />

        </CListItem>






      </List>
    </div>
  );


  const CButton = styled(Button)({
    boxShadow: 'none',

    // border: '2px solid #3C3633',

    // backgroundColor: '#fff',
    fontWeight: "600",
    color: '#FFB200',

    transition: "all 0.5s",

    '&:hover': {
      backgroundColor: '#fff',
      // color: '#fff',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FFB200',
      color: '#fff',

    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
    '&::before': {
      'content': '""',
      position: 'absolute',
      width: '100%',
      height: '4px',
      borderRadius: '4px',
      backgroundColor: '#E4003A',
      bottom: '0',
      left: '0',
      transformOrigin: 'right',
      transform: 'scaleX(0)',
      transition: 'transform .3s ease-in-out',
    },

    '&:hover::before': {
      transformOrigin: 'left',
      transform: 'scaleX(1)',
    }


  });

  return (
    <>
      <AppBar style={{ padding: "0.25rem 0.5rem", backgroundColor: "white", position: "sticky", }}  >
        <Toolbar style={{ height: "90px", padding: "0" }} >
          <video autoplay  style={{ height: "80px", margin: "0" }}  >

          <source src={logo} type="video/mp4" />
          </video>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            style={{ color: "#FFB200", padding: "0", margin: "0 0.25rem" }}
          >
            {isMobile ? (
              <>
                <Box flexGrow={1} display="flex" >
                  {/* <img src={logo} alt="Logo" style={{ height: 40 }} /> */}

                  {/* <video src={logo}></video> */}

                  <Stack>
                    <Typography variant="h6" style={{ color: "#EB5B00", }}  >Jaisalmer Desert Camp And Safari </Typography>
                    <Typography variant="p" style={{ color: "#B60071", fontFamily: "monospace", fontSize: "medium" }}  >Explore the World, One Journey at a Time.</Typography>


                  </Stack>

                </Box>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="bottom"
                  open={drawerOpen}
                  onClose={handleDrawerToggle}



                >
                  {drawer}
                </Drawer>
              </>
            ) : (
              <>
                {/* <img src={logo} alt="Logo" style={{ height: 40 }} /> */}
                {/* <video src={logo} style={{ height: "40px" , margin:"0"  }}  ></video> */}
                <Box>
                  <Stack>

                    <Typography variant="h5" style={{ color: "#EB5B00", }}  >Jaisalmer Desert Camp And Safari </Typography>
                    <Typography variant="p" style={{ color: "#B60071", fontFamily: "monospace", }}  >Explore the World, One Journey at a Time.</Typography>

                  </Stack>

                </Box>
                <Box display="flex">
                  <CButton
                    button
                    onClick={() => handleHomeClick("/")}
                  // style={{ color: activeItem === "Home" ? "red" : "inherit" }}
                  >
                    <Typography >Home</Typography>
                  </CButton>
                  {menuItems.map((item) => (
                    <CButton
                      key={item.name}
                      color="inherit"
                      onClick={() => handleMenuItemClick(item)}
                    // style={{
                    //   color: activeItem === item.name ? "red" : "inherit",
                    // }}
                    >
                      <Typography >{item.name}</Typography>
                    </CButton>
                  ))}
                  <CButton onClick={() => handleHomeClick("/packages")}>
                    <Typography >Packages</Typography>
                  </CButton>
                  {/* <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleDropdownClose}
                  >
                    {dropdownItems.map((option) => (
                      <MenuItem key={option} onClick={handleDropdownClose}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu> */}
                  <CButton

                    onClick={() => handleHomeClick("/sites")}
                  // style={{ color: activeItem === "Home" ? "red" : "inherit" }}
                  >
                    <Typography >Place To Vist</Typography>
                  </CButton>
                  <CButton
                    onClick={() => handleHomeClick("/desert_safari")}
                  // style={{ color: activeItem === "Home" ? "red" : "inherit" }}
                  >
                    <Typography >Desert Safari</Typography>
                  </CButton>
                  <CButton
                    onClick={() => handleHomeClick("/car")}
                  // style={{ color: activeItem === "Home" ? "red" : "inherit" }}
                  >
                    <Typography >Car Rental</Typography>
                  </CButton>
                  <CButton
                    onClick={() => handleHomeClick("/")}
                  // style={{ color: activeItem === "Home" ? "red" : "inherit" }}
                  >
                    <Typography >Gallery</Typography>
                  </CButton>
                  <CButton
                    onClick={() => handleHomeClick("/reviews")}
                  >
                    <Typography  >Reviews</Typography>
                  </CButton>
                </Box>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
