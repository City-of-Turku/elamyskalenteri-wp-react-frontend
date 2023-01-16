import { useRef } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";


const SearchBar = ({ props, calendarRef }) => {

    const Search = styled("div")(() => ({
        borderRadius: 50,
        backgroundColor: "#fff",
        boxShadow: "0px 20px 52px rgba(25, 55, 115, 0.2)",
        width: 470,
        height: 78,
        transform: "translate(0)"
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
        top: "15%",
        fontSize: 32
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

    // const calendarRef = useRef()
    const handleClick = (e) => {
        // calendarRef.current?.scrollIntoView({ behavior: 'smooth' })
        e.preventDefault();
        calendarRef.current.scrollIntoView({ behavior: "smooth" })
    }

    // const onScroll = (e) => {
    //     e.preventDefault();
    //     resultRef.current.scrollIntoView({ behavior: "smooth" })
    //     console.log("ref", resultRef)
    // }

    return (
        <div style={{ position: "relative", top: -35, display: "flex", justifyContent: "center" }}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    // onClick={handleClick}
                    readOnly
                    placeholder="Aloita etsiminen tästä"
                    inputProps={{ "aria-label": "etsi" }}
                />
            </Search>
        </div>
    )
}

export default SearchBar;