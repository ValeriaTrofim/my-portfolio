"use client";
import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import DrawerList from "./DrawerList";
import MobileMenu from "./MobileMenu";

const pages = ["Home", "About me", "Services", "My work", "Contact me"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "background.paper" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 5,
              display: "flex",
              fontFamily: "inherit",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: blueGrey[900],
              textDecoration: "none",
            }}
          >
            Valeria
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <MobileMenu />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                href="#"
                underline="hover"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 2.8,
                  color: blueGrey[900],
                  display: "block",
                  fontFamily: "outfit",
                }}
              >
                {page}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ mx: 2 }}>
              <DarkModeOutlinedIcon sx={{ color: blueGrey[500] }} />
            </IconButton>
            <Tooltip title="Open settings">
              <Button
                onClick={handleOpenUserMenu}
                component={Link}
                href="#contact"
                sx={{
                  p: 1,
                  fontFamily: "inherit",
                  color: blueGrey[900],
                  borderColor: blueGrey[500],
                  display: { xs: "none", md: "inline-flex" },
                }}
                variant="outlined"
                endIcon={<ArrowOutwardOutlinedIcon />}
              >
                Contact
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
