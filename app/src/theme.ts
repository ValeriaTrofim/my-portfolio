"use client";
import { blueGrey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Ovo",
  },
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: blueGrey[900],
    },
  },
});

export default theme;
