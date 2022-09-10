
import vinkLogo from "../../public/svg/vinkLogo1.svg";
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
import { useTheme } from "@mui/material";
import Image from "next/image";
import LangSelect from "./langSelect";
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import SchoolIcon from '@mui/icons-material/School';

const drawerWidth = 240;
const navItems = ['Tapahtumat', 'Harrastukset', 'Koulutukset'];

function DrawerAppBar(props) {

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
  const theme = useTheme();
  // const classes = useStyles();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 4 }}>
        <a href={"/"}><Image src={vinkLogo} alt="Vink logo" height={50} width={150} /></a>
      </Box>
      <Divider />
      <List>
        {mobileNavItems.map((item, index) => {
          const { text, icon } = item;
          return (
            <ListItem button key={text}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          )
        })}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position="static" elevation={0}>
        <Toolbar style={{ height: 240 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <div
              style={{
                clipPath: "polygon(17px 0, 100% 0, calc(100% - 17px) 100%, 0 100%)",
                backgroundColor: "#fff",
                padding: "6px 30px 0px 30px",
                transform: "rotate(-9.28deg)",
              }}>
              <a href={"/"}>
                <Image src={vinkLogo} alt="Vink logo" height={100} width={195} />
              </a>
            </div>
          </Typography>
          <Box component="div" sx={{
            flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: "center"
          }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#193773', fontSize: 15, fontWeight: 900, letterSpacing: 0.5, paddingLeft: 2 }}>
                {item}
              </Button>
            ))}
          </Box>
          <LangSelect />
        </Toolbar>
        <Box
          sx={{
            pb: 4,
            display: { xs: "none", md: "block" },
            fontSize: 40,
            fontFamily: "halogen",
            fontWeight: 900,
            whiteSpace: "nowrap",
            wordWrap: "break-word",
          }}
          style={{ textAlign: "center", letterSpacing: 1 }}
        >
          <span style={{ color: "#ffff" }}>Vink </span>
          <span style={{ color: theme.palette.primary.dark }}>
            - ja löydä tekemistä.
          </span>
        </Box>
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
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default withRouter(DrawerAppBar);