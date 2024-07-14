import React from "react";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const goToFavorites = () => {
    navigate("/favorites");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100px",
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-between',
        margin: 0
      }}
    >
      <img src={logo} alt="logo" onClick={handleLogoClick}/>

      <Button variant="outlined" onClick={goToFavorites}>Favorites</Button>

    </Box>
  );
};
