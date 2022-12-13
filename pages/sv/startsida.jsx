import Index from "../../pageComponents/Index";
import Layout from "../../components/Layout/Layout";
import Box from "@mui/material/Box";
import Image from "next/image";
import vinkLogo from "../../public/svg/vinkLogo1.svg";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import SearchBar from "../../components/Searchbar/SearchBar";

const Home = ({ elements }) => {

  const theme = useTheme();

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  return (
    <Layout locale={"sv"}>
      <SearchBar />
      <Index locale={"sv"} elements={elements} />
      <Box style={{ backgroundColor: "#f2ca99", color: "#ffffff", padding: 12 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "grid", width: "1416px", gridTemplateColumns: "1fr 3fr 1fr", gap: 24 }}>
            <a href={"/"}>
              <Image src={vinkLogo} alt="Vink logo" height={100} width={195} />
            </a>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button
                sx={{ color: theme.palette.secondary.main, fontSize: 19 }}
                onClick={() => handleButtonClick("/")}
              >
                Händelser
              </Button>
              <Button
                sx={{ color: theme.palette.secondary.main, fontSize: 19 }}
                onClick={() => handleButtonClick("/hobbies")}
              >
                Hobbyer
              </Button>
              <Button
                sx={{ color: theme.palette.secondary.main, fontSize: 19 }}
                onClick={() => handleButtonClick("/educations")}
              >
                Utbildningar
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
                  <Typography sx={{ textTransform: 'uppercase !important', padding: '0px 12px 0px 12px' }} className={styles.languageBtnText}>Lägg till händelse</Typography>
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
              <h2 style={{ fontSize: 18, fontFamily: "halogen", color: "#FFF", paddingTop: "16px", marginBottom: 0, borderRadius: 4, fontWeight: 700, letterSpacing: 1 }}>Regionalt samarbete
              </h2>
              <div style={{ display: "flex", fontWeight: 700 }}>
                <p className={"bold"} style={{ margin: "0 15px 0 0" }}>Åbo</p>
                <p className={"bold"} style={{ margin: "0 15px 0 0" }}>Nådendal</p>
                <p className={"bold"} style={{ margin: "0 15px 0 0" }}>Reso</p>
                <p className={"bold"} style={{ margin: "0 0 0 0" }}>S:t Karins</p>
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: 18, fontFamily: "halogen", color: "#FFF", paddingTop: "16px", borderRadius: 4, fontWeight: 700, letterSpacing: 1 }}>Kontaktuppgifter</h2>
              <div>
                <p style={{ margin: "0 15px 0 0" }}>info@jossain.fi</p>
                <p style={{ margin: "0 15px 0 0" }}>(02) 123 123 4</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p>Vink-kalendern ansvarar inte för de meddelade uppgifernas korrekthet</p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 684px)", gridTemplateRows: "repeat(1, 50px)", gap: 48 }}>
            <div>
              <div id="footerlinks" style={{ display: "flex" }}>
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

export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "/wp-json/wp/v2/pages?slug=frontpage-sv&acf_format=standard").then(r => r.json())
  const elements = res[0]?.acf?.elements
  return {
    props: {
      elements: elements
    },
    revalidate: 60,
  }
}


export default Home