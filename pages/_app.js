import '../styles/globals.css'
import React from "react"
import { ThemeProvider } from "@mui/material/styles";
import {
  whiteLabelTheme,
  vinkTheme,
  vinkThemeWhite,
  naantaliTheme,
  raisioTheme,
  kaarinaTheme,
  taiTheme,
} from "../styles/themes";

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={vinkTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
