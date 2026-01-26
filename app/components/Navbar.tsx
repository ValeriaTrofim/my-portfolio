"use client";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import MobileMenu from "./MobileMenu";
import { lists } from "./DrawerList";
import { useColorScheme } from "@mui/material/styles";
import { useCallback } from "react";

const Navbar = () => {
  const { mode, systemMode, setMode } = useColorScheme();

  const toggleDarkTheme = useCallback(() => {
    if (mode) {
      const currMode = mode === "dark" ? "light" : "dark";
      setMode(currMode);
    }
  }, [mode, systemMode]);
  return (
    <AppBar position="static" sx={{ bgcolor: "background.paper" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            color="secondary"
            sx={{
              mr: 5,
              display: "flex",
              fontFamily: "inherit",
              fontWeight: 700,
              letterSpacing: ".2rem",
              textDecoration: "none",
            }}
          >
            Valeria
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {lists.map((list) => (
              <Link
                href={`# ${list.link}`}
                underline="hover"
                color="secondary"
                key={list.page}
                sx={{
                  my: 2,
                  mx: 2.7,
                  display: "block",
                  fontFamily: "outfit",
                }}
              >
                {list.page}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={() => toggleDarkTheme()} sx={{ mx: 2 }}>
              {mode === "dark" ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </IconButton>
            <MobileMenu />
            <Button
              component={Link}
              href="#contact"
              color="secondary"
              sx={{
                p: 1,
                fontFamily: "inherit",
                borderColor: "secondary",
                display: { xs: "none", md: "inline-flex" },
              }}
              variant="outlined"
              endIcon={<ArrowOutwardOutlinedIcon />}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
