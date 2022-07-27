import Navbar from "../Navbar/Navbar";

const Layout = ({ children, locale }) => {
  return (
    <>
      <Navbar locale={locale}/>
      <main>
        {children}
      </main>
      <div style={{ height: 334, backgroundColor: "#193773", color: "#ffffff", padding: 24}}>
      </div>
    </>
  )
}

export default Layout