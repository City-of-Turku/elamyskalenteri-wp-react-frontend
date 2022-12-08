import NavLink from "./NavLink";
import PropTypes from "prop-types"

const SwedishLinks = ({ handleClick }) => {
    return (
        <>
            <NavLink
                href={"/sv/startsida"}
                title={"Startsida"}
                handleClick={handleClick}
            />
            <NavLink
                href={"/sv/evenemang"}
                title={"Evenemang"}
                handleClick={handleClick}
            />
            <NavLink
                href={"/sv/hobbyer"}
                title={"Hobbyer"}
                handleClick={handleClick}
            />
            <NavLink
                href={"/sv/traning"}
                title={"Träning"}
                handleClick={handleClick}
            />
        </>
    )
}

export default SwedishLinks

SwedishLinks.propTypes = {
    handleClick: PropTypes.func
}
