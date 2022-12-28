import Layout from "../../components/Layout/Layout";
import Events from "../../pageComponents/Events";
import SearchBar from "../../components/Searchbar/SearchBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import Image from "next/image";
import vinkLogo from "../../public/svg/logo_orange.svg";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router'

const EventsPage = ({ elements }) => {
    const theme = useTheme();
    const router = useRouter();
    return (
        <Layout locale={"fi"}>
            <SearchBar />
            <Events locale={"fi"} elements={elements} />
            <Box className={styles.bottomNav} style={{ backgroundColor: "#f2ca99", color: "#ffffff", padding: 12, display: { xs: "none" } }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "grid", width: "1416px", gridTemplateColumns: "1fr 3fr 1fr", gap: 24 }}>
                        <a href={"/"}>
                            <Image className={styles.logo} src={vinkLogo} alt="Vink logo" height={100} width={195} />
                        </a>
                        <div className={styles.footer} style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <Button
                                sx={{ color: theme.palette.secondary.main, fontSize: 19 }}
                                onClick={() => router.push("/fi/tapahtumat")}
                            >
                                Tapahtumat
                            </Button>
                            <Button
                                sx={{ color: theme.palette.secondary.main, fontSize: 19 }}
                                onClick={() => router.push("/fi/harrastukset")}
                            >
                                Harrastukset
                            </Button>
                            <Button
                                sx={{ color: theme.palette.secondary.main, fontSize: 19 }}
                                onClick={() => router.push("/fi/koulutukset")}
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
                                    className={styles.languageBtn}
                                    sx={{
                                        borderRadius: 0,
                                        backgroundColor: "primary.dark",
                                        color: "#fff",
                                        "&:hover": {
                                            color: theme.palette.primary.dark,
                                            backgroundColor: "#fff",
                                        },
                                    }}
                                >
                                    <Typography sx={{ textTransform: 'uppercase !important', padding: '0px 12px 0px 12px' }}>Lisää tapahtuma</Typography>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Box>
            <Box style={{ height: "auto", backgroundColor: "#193773", color: "#ffffff", padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
                    <div className={styles.bottomInfo}>
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
                    <div className={styles.bottomExtraInfo}>
                        <div>
                            <ul className={styles.footerLinks}>
                                <li><a href="#" style={{ margin: "0 15px 0 0" }}>Saavutettavuusseloste</a></li>
                                <li><a href="#" style={{ margin: "0 15px 0 0" }}>Tietosuoja ja rekisteriselosteet</a></li>
                                <li><a href="#" style={{ margin: "0 15px 0 0" }}>Evästeasetukset</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Box>
        </Layout>
    )
}

export const getStaticProps = async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "/wp-json/wp/v2/pages?slug=events&acf_format=standard").then(r => r.json())
    const elements = res[0]?.acf?.elements

    return {
        props: {
            elements: elements
        },
        revalidate: 60,
    }

}

export default EventsPage