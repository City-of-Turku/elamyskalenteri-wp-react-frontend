import Layout from "../../components/Layout/Layout";
import Educations from "../../pageComponents/Educations";
import SearchBar from "../../components/Searchbar/SearchBar";
import Box from "@mui/material/Box";
import Image from "next/image";
import vinkLogo from "../../public/svg/logo_orange.svg";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router'

const EducationsPage = ({ elements }) => {
    const theme = useTheme();
    const router = useRouter();
    return (
        <Layout locale={"en"}>
            <SearchBar />
            <Educations locale={"en"} elements={elements} />
            <Box className={styles.bottomNav} style={{ backgroundColor: "#f2ca99", color: "#ffffff", padding: 12, display: { xs: "none" } }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "grid", width: "1416px", gridTemplateColumns: "1fr 3fr 1fr", gap: 24 }}>
                        <a href={"/"}>
                            <Image className={styles.logo} src={vinkLogo} alt="Vink logo" height={100} width={195} />
                        </a>
                        <div className={styles.footer} style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <Button
                                sx={{
                                    color: theme.palette.secondary.main, fontSize: 19, "&:hover": {
                                        textDecorationLine: 'underline'
                                    },
                                }}
                                onClick={() => router.push("/en/events")}
                            >
                                Events
                            </Button>
                            <Button
                                sx={{
                                    color: theme.palette.secondary.main, fontSize: 19, "&:hover": {
                                        textDecorationLine: 'underline'
                                    },
                                }}
                                onClick={() => router.push("/en/hobbies")}
                            >
                                Hobbies
                            </Button>
                            <Button
                                sx={{
                                    color: theme.palette.secondary.main, fontSize: 19, "&:hover": {
                                        textDecorationLine: 'underline'
                                    },
                                }}
                                onClick={() => router.push("/en/educations")}
                            >
                                Educations
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
                                            clipPath: "polygon(9px 0, 100% 0, calc(100% - 9px) 100%, 0 100%)",
                                            color: theme.palette.primary.dark,
                                            backgroundColor: "#fff",
                                        },
                                    }}
                                    className={styles.languageBtn}
                                >
                                    <Typography sx={{ textTransform: 'uppercase !important', padding: '0px 12px 0px 12px' }} className={styles.languageBtnText}>Add event</Typography>
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
                            <h2 style={{ fontSize: 18, fontFamily: "halogen", color: "#FFF", paddingTop: "16px", marginBottom: 0, borderRadius: 4, fontWeight: 700, letterSpacing: 1 }}>Regional collaboration</h2>
                            <div style={{ display: "flex", fontWeight: 700 }}>
                                <p style={{ margin: "0 15px 0 0" }}>Turku</p>
                                <p style={{ margin: "0 15px 0 0" }}>Naantali</p>
                                <p style={{ margin: "0 15px 0 0" }}>Raisio</p>
                                <p style={{ margin: "0 0 0 0" }}>Kaarina</p>
                            </div>
                        </div>
                        <div>
                            <h2 style={{ fontSize: 18, fontFamily: "halogen", color: "#FFF", paddingTop: "16px", borderRadius: 4, fontWeight: 700, letterSpacing: 1 }}>Contact information</h2>
                            <div>
                                <p style={{ margin: "0 15px 0 0" }}>info@jossain.fi</p>
                                <p style={{ margin: "0 15px 0 0" }}>(02) 123 123 4</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <p>Vink-kalenteri is not responsible for the correctness of the information entered in the calendar</p>
                        </div>
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
                    <div className={styles.bottomExtraInfo}>
                        <div>
                            <ul className={styles.footerLinks}>
                                <li><a href="#" style={{ margin: "0 15px 0 0" }}>Accessibility statement</a></li>
                                <li><a href="#" style={{ margin: "0 15px 0 0" }}>Data protection and register statements</a></li>
                                <li><a href="#" style={{ margin: "0 15px 0 0" }}>Cookiepolicy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Box>
        </Layout>
    )
}

export const getStaticProps = async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_WP_URL + "/wp-json/wp/v2/pages?slug=educations-en&acf_format=standard").then(r => r.json())
    const elements = res[0]?.acf?.elements

    return {
        props: {
            elements: elements
        },
        revalidate: 60,
    }

}

export default EducationsPage