import Navbar from "../Navbar/Navbar";

const Layout = ({ children, locale }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <div style={{ height: 334, backgroundColor: "#193773", color: "#ffffff", padding: 24}}>
        Ota yhteyttä
      </div>
    </>
  )
}

export default Layout