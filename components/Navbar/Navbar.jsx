import vinkLogoWhite from "../../public/svg/logo_white.svg";
import vinkLogoOrange from "../../public/svg/logo_orange.svg";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import LangSelect from "./langSelect";
import Link from 'next/link'
import PropTypes from "prop-types"
import LanguageSelector from "../LanguageSelector/LanguageSelector"
import styles from "./Navbar.module.css"
import FinnishLinks from "./FinnishLinks";
import SwedishLinks from "./SwedishLinks";
import EnglishLinks from "./EnglishLinks";
import ResponsiveAppBar from "./AppBar";

const drawerWidth = 240;

const Navbar = ({ locale }) => {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <Box onClick={toggleMenu} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 4, cursor: "pointer" }}>
        <Link href={"/"}>
          <a>
            <Image src={vinkLogoOrange} alt="Vink logo" height={50} width={150} />
          </a>
        </Link>
      </Box>
      <Divider />
      <List>
        {locale === "fi" && <FinnishLinks handleClick={toggleMenu} />}
        {locale === "sv" && <SwedishLinks handleClick={toggleMenu} />}
        {locale === "en" && <EnglishLinks handleClick={toggleMenu} />}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <ResponsiveAppBar /> */}
      <AppBar className={styles.header} component="nav" position="static" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
              <div className={styles.linkContainer}>
                <LanguageSelector />
              </div>
              <LangSelect sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            </Box>
            <Box sx={{ justifyContent: { xs: 'center' }, display: { xs: 'flex', sm: 'flex' }, alignItems: 'center' }}>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={toggleMenu}
                sx={{ color: "#fff", display: { xs: 'flex', sm: 'flex', md: 'none', lg: "none", xl: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ cursor: "pointer" }}>
                <Link href={`/fi/etusivu`}>
                  <a>
                    <Image src={vinkLogoWhite} alt="Vink logo" height={100} width={195} />
                  </a>
                </Link>
              </Box>
              <Typography sx={{ fontSize: 44, color: '#193773', fontFamily: 'halogen', fontWeight: 900, letterSpacing: 1, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
                - ja löydä tekemistä.
              </Typography>
            </Box>
            <Box component="div" sx={{
              justifyContent: "center", textDecorationLine: 'underline', letterSpacing: 1, fontFamily: 'halogen', display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }
            }}>
              <div className={styles.container}>
                <div className={styles.linkContainer}>
                  {locale === "fi" && <FinnishLinks handleClick={toggleMenu} />}
                  {locale === "sv" && <SwedishLinks handleClick={toggleMenu} />}
                  {locale === "en" && <EnglishLinks handleClick={toggleMenu} />}
                </div>
              </div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggleMenu}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar

Navbar.propTypes = {
  locale: PropTypes.string,
}