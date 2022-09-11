import Navbar from "../Navbar/Navbar";
import Box from "@mui/material/Box";
import DynamicComponent from "../DynamicComponent/dynamicComponent";

const Layout = ({ children, locale }) => {
  return (
    <>
      <Navbar locale={locale}/>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout