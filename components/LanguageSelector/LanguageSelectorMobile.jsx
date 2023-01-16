import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from "@mui/material";
import Link from "next/link";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useRouter } from "next/router";
import { resolvePath, resolveActive } from "../../functions/pathResolver";

const LanguageSelectorMobile = ({ locale }) => {
    const [lang, setLang] = useState()
    const handleChange = (event) => {
        if (event.target.selected) {
            setLang(event.target.value)
        }
    }

    const languageBtnMobile = (
        <div>
            <FormControl variant="standard" sx={{ m: 2, minWidth: 50, display: { xs: 'flex', md: 'none' } }}>
                <Select
                    sx={{ fontFamily: "forma-djr-micro, sans-serif !important" }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    defaultValue="fi"
                    onChange={event => handleChange(event)}
                >
                    <MenuItem value="fi" onChange={event => handleChange(event)}><Link href="/fi/etusivu">FI</Link></MenuItem>
                    <MenuItem value="sv" onChange={event => handleChange(event)}><Link href="/sv/startsida">SV</Link></MenuItem>
                    <MenuItem value="en" onChange={event => handleChange(event)}><Link href="/en/frontpage">EN</Link></MenuItem>
                </Select>
            </FormControl>
        </div>
    )

    return (
        <Box>
            {languageBtnMobile}
        </Box>
    )
}

export default LanguageSelectorMobile