import styles from "./Navbar.module.css";
import PropTypes from "prop-types"
import Link from "next/link";
import { resolveActive } from "../../functions/pathResolver"
import { useRouter } from "next/router";

const NavLink = ({ href, title, handleClick }) => {
    const router = useRouter()
    const currentRoute = router.asPath

    return (
        <Link href={href}>
            <a
                className={
                    resolveActive(currentRoute, href)
                        ? `${styles.link} ${styles.activeLink}`
                        : styles.link
                }
                onClick={() => handleClick()}>
                {title}
            </a>
        </Link>
    )
}

export default NavLink

NavLink.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    handleClick: PropTypes.func,
}