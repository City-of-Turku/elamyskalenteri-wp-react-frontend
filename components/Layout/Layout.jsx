import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
import Box from "@mui/material/Box";
import DynamicComponent from "../DynamicComponent/dynamicComponent";

const Layout = ({ children, locale, footerProps }) => {
  return (
    <>
      <Navbar locale={locale} />
      <main>
        {children}
      </main>
      {/* <Footer data={footerProps} locale={locale} /> */}
    </>
  )
}

export default Layout