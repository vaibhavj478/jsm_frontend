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
import logo from "./../assets/Images/logo.png";
import axios from "axios";
import { padding } from "@mui/system";

import { styled } from '@mui/material/styles';



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
    <div onClick={handleDrawerToggle}>
      <List>
        <ListItem
          button
          onClick={()=>handleHomeClick("/")}
          style={{ color: activeItem === "Home" ? "red" : "inherit" }}
        >
          <ListItemText primary="Home " />
        </ListItem>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.name}
            onClick={() => handleMenuItemClick(item)}
            style={{ color: activeItem === item.name ? "red" : "inherit" }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  const CButton = styled(Button)({
    boxShadow: 'none',

    // border: '2px solid #3C3633',

    // backgroundColor: '#fff',
    fontWeight:"600",
    color: '#FFB200',

    transition :"all 0.5s", 

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

    '&:hover::before' : {
      transformOrigin: 'left',
      transform: 'scaleX(1)',
    }


});



  return (
    <>
      <AppBar position="static"    style={{  padding:"0.5rem" , backgroundColor:"white" }}  >
        <Toolbar >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            style={{color:"#FFB200" ,  padding:"0"  }}
            
          >
            {isMobile ? (
              <>
                <Box flexGrow={1} display="flex">
                  <img src={logo} alt="Logo" style={{ height: 40 }} />
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
                  anchor="right"
                  open={drawerOpen}
                  onClose={handleDrawerToggle}
                >
                  {drawer}
                </Drawer>
              </>
            ) : (
              <>
                <img src={logo} alt="Logo" style={{ height: 40 }} />
                <Box display="flex">
                  <CButton
                    button
                    onClick={()=>handleHomeClick("/")}
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
                  <CButton  onClick={()=>handleHomeClick("/packages")}>
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
                    
                    onClick={()=>handleHomeClick("/sites")}
                    // style={{ color: activeItem === "Home" ? "red" : "inherit" }}
                  >
                    <Typography >Place To Vist</Typography>
                  </CButton>
                  <CButton
                    
                    onClick={()=>handleHomeClick("/desert_safari")}
                    // style={{ color: activeItem === "Home" ? "red" : "inherit" }}
                  >
                    <Typography >Desert Safari</Typography>
                  </CButton>
                  <CButton
                    
                    onClick={()=>handleHomeClick("/car")}
                    // style={{ color: activeItem === "Home" ? "red" : "inherit" }}
                  >
                    <Typography >Car Rental</Typography>
                  </CButton>
                  <CButton
                    
                    onClick={()=>handleHomeClick("/")}
                    // style={{ color: activeItem === "Home" ? "red" : "inherit" }}
                  >
                    <Typography >Gallery</Typography>
                  </CButton>
                  <CButton
                    
                    onClick={()=>handleHomeClick("/reviews")}
                  
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
