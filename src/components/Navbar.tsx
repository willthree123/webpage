import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

interface NavBarProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ toggleTheme, darkMode }) => {
  return (
    <AppBar position="static" sx={{ paddingX: 2, boxShadow: 3 }}>
      <Toolbar>
        {/* Title with spacing */}
        <Typography variant="h6" component="div" sx={{ marginRight: 4, fontWeight: "bold" }}>
          My App
        </Typography>

        {/* Buttons container */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2, // Adds consistent spacing between buttons
            flexGrow: 1,
          }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              fontWeight: 500,
              paddingX: 2,
              textTransform: "none", // Makes text more readable
            }}>
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/library"
            sx={{
              fontWeight: 500,
              paddingX: 2,
              textTransform: "none",
            }}>
            Library
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{
              fontWeight: 500,
              paddingX: 2,
              textTransform: "none",
            }}>
            About
          </Button>
        </Box>

        {/* Theme toggle switch */}
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          {darkMode ? "Dark" : "Light"}
        </Typography>
        <Switch checked={darkMode} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
