const Layout = ({ children, locale }) => {
  return (
    <>
      <div style={{ height: 250, backgroundColor: "#F26835", padding: 24}}>
        VINK
      </div>
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