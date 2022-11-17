import '../styles/globals.css'
import React, { useEffect } from "react"
import { useRouter } from 'next/router';
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

  const { pathname } = useRouter();

  let locale
  languages.map(l => {
    if (pathname.includes(l)) {
      locale = l
    }
  })

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])


  const getLayout = Component.getLayout || ((page) => page)
  return (

    <ThemeProvider theme={vinkTheme}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>

  )
}


const languages = ["fi", "sv", "en"]

export default MyApp
