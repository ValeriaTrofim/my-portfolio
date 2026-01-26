"use client";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import { createContext, useContext, useMemo } from "react";
import type {} from "@mui/material/themeCssVarsAugmentation";
import { blueGrey } from "@mui/material/colors";

const AppThemeContext = createContext(null);

const AppThemeProvider = (props: any) => {
  const theme = useMemo(() => {
    return responsiveFontSizes(
      createTheme({
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
        colorSchemes: {
          light: {
            palette: {
              primary: {
                main: blueGrey[500],
              },
              secondary: {
                main: blueGrey[900],
              },
            },
          },
          dark: {
            palette: {
              primary: {
                main: blueGrey[500],
              },
              secondary: {
                main: blueGrey[500],
              },
            },
          },
        },
      }),
    );
  }, []);

  return (
    <AppThemeContext.Provider value={null}>
      <ThemeProvider theme={theme} disableTransitionOnChange>
        <CssBaseline enableColorScheme />
        {props.children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export const useAppThemeContext = () => useContext(AppThemeContext);

export default AppThemeProvider;
