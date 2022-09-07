import IndexPage from "../../pageComponents/Index";
import Layout from "../../components/Layout/Layout";
import Box from "@mui/material/Box";

const Home = ({ elements }) => {
  return (
    <Layout locale={"sv"} >
      <IndexPage locale={"sv"} elements={elements} />
      <Box style={{ height: 334, backgroundColor: "#193773", color: "#ffffff", padding: 24}}>
        <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 456px)", gridTemplateRows: "repeat(1, 150px)", gap: 24 }}>
            <div>
              <h2 style={{ fontSize: 18, fontFamily: "halogen", color: "#FFF", paddingTop: "16px", marginBottom: 0, borderRadius: 4, fontWeight: 700, letterSpacing: 1 }}>Regionalt samarbete
              </h2>
              <div style={{ display: "flex"}}>
                <p className={"fat"} style={{ margin: "0 15px 0 0" }}>Åbo</p>
                <p className={"fat"}  style={{ margin: "0 15px 0 0" }}>Nådendal</p>
                <p className={"fat"}  style={{ margin: "0 15px 0 0" }}>Reso</p>
                <p className={"fat"}  style={{ margin: "0 0 0 0" }}>S:t Karins</p>
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: 18, fontFamily: "halogen", color: "#FFF", paddingTop: "16px", borderRadius: 4, fontWeight: 700, letterSpacing: 1 }}>Kontaktuppgifter</h2>
              <div>
                <p style={{ margin: "0 15px 0 0" }}>info@jossain.fi</p>
                <p style={{ margin: "0 15px 0 0" }}>(02) 123 123 4</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
              <p>Vink-kalendern ansvarar inte för de meddelade uppgifernas korrekthet</p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 684px)", gridTemplateRows: "repeat(1, 50px)", gap: 48 }}>
            <div>
              <div id="footerlinks" style={{ display: "flex"}}>
                <a href="#" style={{ margin: "0 15px 0 0" }}>Tillgänglighetsutlåtande</a>
                <a href="#" style={{ margin: "0 15px 0 0" }}>Dataskydds- och registerbeskrivning</a>
                <a href="#" style={{ margin: "0 15px 0 0" }}>Cookiepolicy</a>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Layout>
  )
}

export const getStaticProps = async() => {
  const res = await fetch("http://localhost/wp-json/wp/v2/pages?slug=frontpage&acf_format=standard").then(r => r.json())
  const elements = res[0]?.acf?.elements
  return {
    props: {
      elements: elements
    }
  }
}


export default Home