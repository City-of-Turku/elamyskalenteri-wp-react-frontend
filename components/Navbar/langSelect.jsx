import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from "@mui/material";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const langs = ['FI', 'SV', 'EN'];
const LangSelect = ({ locale }) => {
    const [open, setOpen] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleChange = (event) => {
        locale.changeLanguage(event.target.value);
    };

    const theme = useTheme();

    const languageBtnMobile = (
        <Box sx={{ flexGrow: 1, minWidth: 120, display: { sm: 'none' } }}>
            <Button className={styles.languageMobile}
                onClick={() => {
                    setOpen(!open);
                }}>
                <Select
                    style={{ outline: 'none' }}
                    onClick={() => setOpen(!open)}
                    // value={language}
                    onChange={handleChange}
                    open={open}
                    defaultValue={locale}
                >
                    {langs.map((lang, index) => {
                        return (
                            <MenuItem key={index} value={lang}>
                                {lang}
                            </MenuItem>
                        );
                    })}
                </Select>
            </Button>
        </Box>
    )

    return (
        <Box sx={{ display: 'flex' }}>
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },

                }}
            >
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
                                backgroundColor: locale === "fi" ? "#fff" : "primary.main",
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
                                backgroundColor: locale === "sv" ? "#fff" : "primary.main",
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
                                backgroundColor: locale === "en" ? "#fff" : "primary.main",
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