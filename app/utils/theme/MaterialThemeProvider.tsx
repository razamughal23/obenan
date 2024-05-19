"use client";
import { ThemeProvider } from "@mui/material";
import { theme } from "./defaultTheme";

const MaterialThemeProvider = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialThemeProvider;
