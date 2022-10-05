import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from "@mui/material";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const LangSelect = ({ locale }) => {
    const theme = useTheme();

    const [lang, setLang] = useState()
    const handleChange = (event) => {
        setLang(event.target.value)
    }

    const languageBtnMobile = (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 50, display: { xs: 'flex', md: 'none' } }}>
                <Select
                    value={lang}
                    onChange={handleChange}>
                    <MenuItem value="FI"><Link href={"/fi"}>FI</Link></MenuItem>
                    <MenuItem value="SV"><Link href={"/sv"}>SV</Link></MenuItem>
                    <MenuItem value="EN"><Link href={"/en"}>EN</Link></MenuItem>
                </Select>
            </FormControl>
        </div>
    )

    return (
        <Box>
            <Box sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
            }}>
                <div
                    style={{
                        backgroundColor: theme.palette.secondary.main,
                        padding: "4px",
                        clipPath:
                            "polygon(9px 0, 100% 0, calc(100% - 9px) 100%, 0 100%)",
                    }}
                >
                    <Link href={"/fi"}>
                        <Button
                            className={styles.languageBtn}
                            sx={{
                                borderRadius: 0,
                                backgroundColor: locale === "fi" ? "#fff" : theme.palette.primary.main,
                                color: locale === "fi" ? "primary.dark" : "primary.dark",
                                "&:hover": {
                                    color: theme.palette.primary.dark,
                                    backgroundColor: "#fff",
                                },
                            }}
                        >
                            <Typography className={styles.languageBtnText}>Fi</Typography>
                        </Button>
                    </Link>
                </div>
                <div
                    style={{
                        backgroundColor: theme.palette.secondary.main,
                        padding: "4px",
                        clipPath:
                            "polygon(9px 0, 100% 0, calc(100% - 9px) 100%, 0 100%)",
                    }}
                >
                    <Link href={"/sv"}>
                        <Button
                            className={styles.languageBtn}
                            sx={{
                                borderRadius: 0,
                                backgroundColor: locale === "sv" ? "#fff" : theme.palette.primary.main,
                                color: locale === "sv" ? "primary.dark" : "primary.dark",
                                "&:hover": {
                                    color: theme.palette.primary.dark,
                                    backgroundColor: "#fff",
                                },
                            }}
                        >
                            <Typography className={styles.languageBtnText}>Sv</Typography>
                        </Button>
                    </Link>
                </div>
                <div
                    style={{
                        backgroundColor: theme.palette.secondary.main,
                        padding: "4px",
                        clipPath:
                            "polygon(9px 0, 100% 0, calc(100% - 9px) 100%, 0 100%)",
                    }}
                >
                    <Link href={"/en"}>
                        <Button
                            sx={{
                                borderRadius: 0,
                                backgroundColor: locale === "en" ? "#fff" : theme.palette.primary.main,
                                color: locale === "en" ? "primary.dark" : "primary.dark",
                                "&:hover": {
                                    color: theme.palette.primary.dark,
                                    backgroundColor: "#fff",
                                },
                            }}
                            className={styles.languageBtn}
                        >
                            <Typography className={styles.languageBtnText}>En</Typography>
                        </Button>
                    </Link>
                </div>
                <div
                    style={{
                        backgroundColor: theme.palette.secondary.main,
                        padding: "4px",
                        clipPath:
                            "polygon(9px 0, 100% 0, calc(100% - 9px) 100%, 0 100%)",
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
            </Box>
            <Box>
                {languageBtnMobile}
            </Box>
        </Box>

    )
}

export default LangSelect