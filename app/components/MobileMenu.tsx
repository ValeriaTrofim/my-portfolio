"use client";
import { Box, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import DrawerList from "./DrawerList";
import { blueGrey } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <IconButton aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuIcon
          sx={{
            display: { xs: "flex", md: "none" },
            color: blueGrey[900],
          }}
        />
      </IconButton>
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <DrawerList />
        </Box>
      </Drawer>
    </>
  );
};

export default MobileMenu;
