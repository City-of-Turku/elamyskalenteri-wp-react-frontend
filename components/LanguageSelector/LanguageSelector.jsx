import React, { useState } from 'react';
import Link from "next/link"
import styles from "./LanguageSelector.module.css"
import PropTypes from "prop-types"
import { useRouter } from "next/router";
import { resolvePath } from "../../functions/pathResolver";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import LangSelect from '../Navbar/langSelect';

const LanguageSelector = () => {
    const { asPath } = useRouter();

    return (
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <LangLink href={`/fi/${resolvePath(asPath.slice(4), "fi")}`} language="fi" />
            <LangLink href={`/sv/${resolvePath(asPath.slice(4), "sv")}`} language="sv" />
            <LangLink href={`/en/${resolvePath(asPath.slice(4), "en")}`} language="en" />
        </Box>
    )
}

const LangLink = ({ href, language }) => {
    const theme = useTheme();

    // const [lang, setLang] = useState()
    // const handleChange = (event) => {
    //     setLang(event.target.value)
    // }

    return (
        <>
            <div
                style={{
                    backgroundColor: theme.palette.secondary.main,
                    padding: "4px",
                    clipPath:
                        "polygon(9px 0, 100% 0, calc(100% - 9px) 100%, 0 100%)",
                }}
            >
                <Link href={href} >
                    <Button sx={{
                        borderRadius: 0,
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.dark,
                        "&:hover": {
                            color: "fff",
                            backgroundColor: "#fff",
                        },
                    }} className={styles.languageBtnText}>
                        <a> {language} </a>
                    </Button>
                </Link>
            </div>
        </>

    )
}

export default LanguageSelector

LangLink.propTypes = {
    href: PropTypes.string,
    language: PropTypes.string,
}
