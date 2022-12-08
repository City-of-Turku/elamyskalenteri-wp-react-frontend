import NavLink from "./NavLink";
import PropTypes from "prop-types"

const EnglishLinks = ({ handleClick }) => {
    return (
        <>
            <NavLink
                href={"/en/frontpage"}
                title={"Frontpage"}
                handleClick={handleClick}
            />
            <NavLink
                href={"/en/events"}
                title={"Events"}
                handleClick={handleClick}
            />
            <NavLink
                href={"/en/hobbies"}
                title={"Hobbies"}
                handleClick={handleClick}
            />
            <NavLink
                href={"/en/educations"}
                title={"Educations"}
                handleClick={handleClick}
            />
        </>
    )
}

export default EnglishLinks

EnglishLinks.propTypes = {
    handleClick: PropTypes.func
}
