import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from "@mui/material";
import Link from "next/link";
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
            {languageBtnMobile}
        </Box>
    )
}

export default LangSelect