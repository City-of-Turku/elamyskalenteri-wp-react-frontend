import IndexPage from "../../pageComponents/Index";
import Layout from "../../components/Layout/Layout";
import Box from "@mui/material/Box";

const Home = ({ elements }) => {
  return (
    <Layout locale={"fi"} >
      <IndexPage locale={"fi"} elements={elements} />
      <Box style={{ height: 334, backgroundColor: "#193773", color: "#ffffff", padding: 24}}>
        <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 456px)", gridTemplateRows: "repeat(1, 150px)", gap: 24 }}>
            <div>
              <h2 style={{ fontSize: 18, fontFamily: "halogen", color: "#FFF", paddingTop: "16px", marginBottom: 0, borderRadius: 4, fontWeight: 700, letterSpacing: 1 }}>Alueellista yhteistyötä</h2>
              <div style={{ display: "flex"}}>
                <p className={"fat"} style={{ margin: "0 15px 0 0" }}>Turku</p>
                <p className={"fat"}  style={{ margin: "0 15px 0 0" }}>Naantali</p>
                <p className={"fat"}  style={{ margin: "0 15px 0 0" }}>Raisio</p>
                <p className={"fat"}  style={{ margin: "0 0 0 0" }}>Kaarina</p>
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: 18, fontFamily: "halogen", color: "#FFF", paddingTop: "16px", borderRadius: 4, fontWeight: 700, letterSpacing: 1 }}>Yhteystiedot</h2>
              <div>
                <p style={{ margin: "0 15px 0 0" }}>info@jossain.fi</p>
                <p style={{ margin: "0 15px 0 0" }}>(02) 123 123 4</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
              <p>Vink-kalenteri ei vasta kalenteriin ilmoitettujen tietojen oikeellisuudesta</p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 684px)", gridTemplateRows: "repeat(1, 50px)", gap: 48 }}>
            <div>
              <div id="footerlinks" style={{ display: "flex"}}>
                <a href="#" style={{ margin: "0 15px 0 0" }}>Saavutettavuusseloste</a>
                <a href="#" style={{ margin: "0 15px 0 0" }}>Tietosuoja ja rekisteriselosteet</a>
                <a href="#" style={{ margin: "0 15px 0 0" }}>Evästeasetukset</a>
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