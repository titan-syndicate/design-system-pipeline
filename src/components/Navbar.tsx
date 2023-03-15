import React from "react";
import {
  AppBar,
  Avatar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  Tooltip,
  MenuItem,
  Button,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              page1
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              page2
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              page3
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={false}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
