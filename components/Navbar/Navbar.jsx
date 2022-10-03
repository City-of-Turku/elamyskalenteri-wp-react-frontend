import vinkLogoWhite from "../../public/svg/logo_white.svg";
import vinkLogoOrange from "../../public/svg/logo_orange.svg";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { withRouter } from "next/router";
import ListItemIcon from '@mui/material/ListItemIcon';
import Image from "next/image";
import LangSelect from "./langSelect";
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import SchoolIcon from '@mui/icons-material/School';
import SearchBar from './SearchBar';
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const drawerWidth = 240;

const Navbar = (props) => {

  const { window, history } = props;

  const mobileNavItems = [
    {
      text: "Etusivu",
      icon: <HomeIcon />,
      onClick: () => history.push('/'),
    },
    {
      text: "Tapahtumat",
      icon: <EventIcon />
    },
    {
      text: "Harrastukset",
      icon: <SportsFootballIcon />
    },
    {
      text: "Koulutukset",
      icon: <SchoolIcon />
    }
  ]

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 4 }}>
        <a href={"/"}><Image src={vinkLogoOrange} alt="Vink logo" height={50} width={150} /></a>
      </Box>
      <Divider />
      <List>
        {mobileNavItems.map((item) => {
          const { text, icon } = item;
          return (
            <ListItem button key={text}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <Link href="/"><ListItemText primary={text} /></Link>
            </ListItem>
          )
        })}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar className={styles.header} component="nav" position="static" elevation={0}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}> <LangSelect /></Box>
            <Box sx={{ justifyContent: { xs: 'center' }, display: { xs: 'flex', sm: 'flex' }, alignItems: 'center' }}>
              <IconButton
                color="inherit"
                fontSize="large"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { xs: 'flex', sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Link href="/">
                <Image src={vinkLogoWhite} alt="Vink logo" height={100} width={195} />
              </Link>
              <Typography sx={{ fontSize: 44, color: '#193773', fontFamily: 'halogen', fontWeight: 900, letterSpacing: 1, display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
                - ja löydä tekemistä.
              </Typography>
            </Box>
            <Box component="div" sx={{
              justifyContent: "center", display: { xs: 'none', sm: 'flex', textDecorationLine: 'underline', color: '#193773', }
            }}>
              <Link href={"/events"}>
                <Button sx={{ color: '#193773', fontSize: 18, fontWeight: 900, letterSpacing: 0.5 }}>
                  tapahtumat
                </Button>
              </Link>
              <Link href={"/hobbies"}>
                <Button sx={{ color: '#193773', fontSize: 18, fontWeight: 900, letterSpacing: 0.5 }}>
                  harrastukset
                </Button>
              </Link>
              <Link href={"/hobbies"}>
                <Button sx={{ color: '#193773', fontSize: 18, fontWeight: 900, letterSpacing: 0.5 }}>
                  koulutukset
                </Button>
              </Link>
            </Box>
          </Box>
        </Toolbar>
        <SearchBar />
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }, }}>
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 5 }}>
        <Toolbar />
      </Box>
    </Box >
  );
}

export default withRouter(Navbar);