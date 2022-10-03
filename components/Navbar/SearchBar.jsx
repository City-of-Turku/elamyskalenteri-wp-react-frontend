import { useRef } from 'react';
import Box from '@mui/material/Box';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

const SearchBar = () => {

    const Search = styled("div")(() => ({
        position: "relative",
        borderRadius: 50,
        backgroundColor: "#fff",
        boxShadow: "0px 20px 52px rgba(25, 55, 115, 0.2)",
        width: 470,
        height: 78,
    }));

    const SearchIconWrapper = styled("div")(() => ({
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        background: "#F29544",
        borderRadius: "50px",
        width: "56px",
        height: "56px",
        right: "7px",
        top: "15%"
    }));

    const StyledInputBase = styled(InputBase)(() => ({
        width: "100%",
        height: "100%",
        padding: "0 60px 0 20px",
        input: {
            color: "#193773",
            fontSize: 17,
            fontWeight: 900,
            letterSpacing: 1,
            "&::placeholder": {
                opacity: 1,
            }
        },
    }));

    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
        console.log('ref')
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Search onClick={handleClick}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Aloita etsiminen tästä"
                    inputProps={{ "aria-label": "etsi" }}
                />
            </Search>
        </Box>
    )
}

export default SearchBar;