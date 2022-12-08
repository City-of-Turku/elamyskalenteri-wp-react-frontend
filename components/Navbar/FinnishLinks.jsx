import NavLink from "./NavLink"
import PropTypes from "prop-types"

const FinnishLinks = ({ handleClick }) => {
    return (
        <>
            <NavLink
                href={"/fi/etusivu"}
                title={"Etusivu"}
                handleClick={handleClick}
            />
            <NavLink
                href={"/fi/tapahtumat"}
                title={"Tapahtumat"}
                handleClick={handleClick}
            />
            <NavLink
                href={"/fi/harrastukset"}
                title={"Harrastukset"}
                handleClick={handleClick}
            />
            <NavLink
                href={"/fi/koulutukset"}
                title={"Koulutukset"}
                handleClick={handleClick}
            />
        </>
    )
}

export default FinnishLinks

FinnishLinks.propTypes = {
    handleClick: PropTypes.func
}