import Index from "../pageComponents/Index";
import Layout from "../components/Layout/Layout";
import Box from "@mui/material/Box";
import Image from "next/image";
import vinkLogoWhite from "../public/svg/logo_white.svg";
import Button from "@mui/material/Button";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

const Home = ({ elements }) => {
  const theme = useTheme();
  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <Layout>
      <Index locale={"fi"} elements={elements} />
      <Box style={{ backgroundColor: "#f2ca99", color: "#ffffff", padding: 12 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "grid", width: "1416px", gridTemplateColumns: "1fr 3fr 1fr", gap: 24 }}>
            <a href={"/"}>
              <Image src={vinkLogoWhite} alt="Vink logo" height={100} width={195} />
            </a>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                sx={{ color: theme.palette.secondary.main, fontSize: 19 }}
                onClick={() => handleButtonClick("/")}
              >
                Tapahtumat
              </Button>
              <Button
                sx={{ color: theme.palette.secondary.main, fontSize: 19 }}
                onClick={() => handleButtonClick("/hobbies")}
              >
                Harrastukset
              </Button>
              <Button
                sx={{ color: theme.palette.secondary.main, fontSize: 19 }}
                onClick={() => handleButtonClick("/educations")}
              >
                Koulutukset
              </Button>
            </div>
            <div
              style={{
                backgroundColor: theme.palette.secondary.main,
                padding: "4px",
                clipPath:
                  "polygon(9px 0, 100% 0, calc(100% - 9px) 100%, 0 100%)",
                height: "fit-content",
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Link href={"#"}>
                <Button
                  sx={{
                    borderRadius: 0,
                    backgroundColor: "primary.dark",
                    color: "#fff",
                    "&:hover": {
                      color: theme.palette.primary.dark,
                      backgroundColor: "#fff",
                    },
                  }}
                  className={styles.languageBtn}
                >
                  <Typography sx={{ textTransform: 'uppercase !important', padding: '0px 12px 0px 12px' }} className={styles.languageBtnText}>Lisää tapahtuma</Typography>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Box>
      <Box style={{ height: 334, backgroundColor: "#193773", color: "#ffffff", padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 456px)", gridTemplateRows: "repeat(1, 150px)", gap: 24 }}>
            <div>
              <h2 style={{ fontSize: 18, fontFamily: "halogen", color: "#FFF", paddingTop: "16px", marginBottom: 0, borderRadius: 4, fontWeight: 700, letterSpacing: 1 }}>Alueellista yhteistyötä</h2>
              <div style={{ display: "flex", fontWeight: 700 }}>
                <p className={"bold"} style={{ margin: "0 15px 0 0" }}>Turku</p>
                <p className={"bold"} style={{ margin: "0 15px 0 0" }}>Naantali</p>
                <p className={"bold"} style={{ margin: "0 15px 0 0" }}>Raisio</p>
                <p className={"bold"} style={{ margin: "0 0 0 0" }}>Kaarina</p>
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: 18, fontFamily: "halogen", color: "#FFF", paddingTop: "16px", borderRadius: 4, fontWeight: 700, letterSpacing: 1 }}>Yhteystiedot</h2>
              <div>
                <p style={{ margin: "0 15px 0 0" }}>info@jossain.fi</p>
                <p style={{ margin: "0 15px 0 0" }}>(02) 123 123 4</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p>Vink-kalenteri ei vasta kalenteriin ilmoitettujen tietojen oikeellisuudesta</p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 684px)", gridTemplateRows: "repeat(1, 50px)", gap: 48 }}>
            <div>
              <div id="footerlinks" style={{ display: "flex" }}>
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

export const getStaticProps = async () => {

  const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "/wp-json/wp/v2/pages?slug=frontpage&acf_format=standard").then(r => r.json())
  const elements = res[0]?.acf?.elements
  console.log(elements);
  return {
    props: {
      elements: elements
    },
    revalidate: 60,
  }
}


export default Home