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
  const handleHomeClick = () => {
    setActiveItem("Home");
    navigate("/");
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
          onClick={handleHomeClick}
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

  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
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
                  <Button
                    button
                    onClick={handleHomeClick}
                    style={{ color: activeItem === "Home" ? "red" : "inherit" }}
                  >
                    <Typography variant="button">Home</Typography>
                  </Button>
                  {menuItems.map((item) => (
                    <Button
                      key={item.name}
                      color="inherit"
                      onClick={() => handleMenuItemClick(item)}
                      style={{
                        color: activeItem === item.name ? "red" : "inherit",
                      }}
                    >
                      <Typography variant="button">{item.name}</Typography>
                    </Button>
                  ))}
                  <Button color="inherit" onClick={handleDropdownClick}>
                    Dropdown
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleDropdownClose}
                  >
                    {dropdownItems.map((option) => (
                      <MenuItem key={option} onClick={handleDropdownClose}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
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
