
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { styled } from "@mui/material/styles";
import styles from "../../styles/Home.module.css";
import vinkLogo from "../../public/svg/vinkLogo1.svg";
import Image from "next/image";
import {useTheme} from "@mui/material";

const useStyles = styled({
  logo: {
    width: 195,
    height: 100,
    clipPath: "polygon(5px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
    backgroundColor: "#fff",
    padding: "1px 25px 1px 25px",
    transform: "rotate(-9.28deg)",
  },
});

const Navbar = () => {
    const theme = useTheme();
    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleMenuClick = (pageURL) => {
        history.push(pageURL);
    };

    const handleButtonClick = (pageURL) => {
        history.push(pageURL);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pages = [
    {
      menuTitle: "Tapahtumat",
      pageURL: "/",
    },
    {
      menuTitle: "Harrastukset",
      pageURL: "/hobbies",
    },
    {
      menuTitle: "Koulutukset",
      pageURL: "/educations",
    },
  ];

  return (
      <div className={styles.customizeToolbar}>
        <AppBar position="static" elevation={0}>
          <Container maxWidth="xl">
            <Toolbar disableGutters style={{ height: 220 }}>
              <Typography
                  component="div"
                  sx={{ flexGrow: 2, display: { xs: "none", lg: "flex", md: "flex"  } }}
              >
                  <div
                      style={{
                          clipPath: "polygon(17px 0, 100% 0, calc(100% - 17px) 100%, 0 100%)",
                          backgroundColor: "#fff",
                          padding: "6px 30px 0px 30px",
                          transform: "rotate(-9.28deg)",
                      }}>
                <a href={"/"}>
                    <Image src={vinkLogo} alt="Vink logo" height={100} width={195}/>
                </a>
                </div>
              </Typography>
              <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ display: { xs: "flex", md: "flex" } }}
                >
                  {pages.map((page) => {
                    const { menuTitle, pageURL } = page;
                    return (
                        <MenuItem onClick={() => handleMenuClick(pageURL)}>
                          {menuTitle}
                        </MenuItem>
                    );
                  })}
                </Menu>
              </Box>

              <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", lg: "flex", md: "block" },
                    alignItems: "center",
                  }}
              >
                <Button
                    sx={{ color: theme.palette.secondary.main, fontSize: 19 }}
                    onClick={() => handleButtonClick("/")}
                >
                  Tapahtumat
                </Button>
                <Button
                    sx={{ color: theme.palette.secondary.main, fontSize: 19 }}
                    onClick={() => handleButtonClick("/hobbies")}
                >
                    Harrastukset
                </Button>
                <Button
                    sx={{ color: theme.palette.secondary.main, fontSize: 19 }}
                    onClick={() => handleButtonClick("/educations")}
                >
                  Koulutukset
                </Button>
              </Box>
              <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "flex" },
                    alignItems: "center",
                  }}
              >
                <div
                    style={{
                      backgroundColor: theme.palette.secondary.main,
                      padding: "4px",
                      clipPath:
                          "polygon(9px 0, 100% 0, calc(100% - 9px) 100%, 0 100%)",
                    }}
                >
                  <Button
                      className={styles.languageBtn}
                      sx={{
                        fontSize: 19,
                        borderRadius: 0,
/*                        backgroundColor:
                            i18n.language === "fi" ? "#fff" : "primary.main",
                        color: i18n.language === "fi" ? "primary.main" : "#ffff",*/
                        "&:hover": {
                          color: theme.palette.primary.main,
                          backgroundColor: "#fff",
                        },
                      }}
                  >
                    Fi
                  </Button>
                </div>

                <div
                    style={{
                      backgroundColor: theme.palette.secondary.main,
                      padding: "4px",
                      clipPath:
                          "polygon(9px 0, 100% 0, calc(100% - 9px) 100%, 0 100%)",
                    }}
                >
                  <Button
                      className={styles.languageBtn}
                      sx={{
                        fontSize: 19,
                        borderRadius: 0,
/*                        backgroundColor:
                            i18n.language === "sv" ? "#ffffff" : "primary.main",
                        color: i18n.language === "sv" ? "primary.main" : "#ffff",*/
                        "&:hover": {
                          color: theme.palette.primary.main,
                          backgroundColor: "#fff",
                        },
                      }}
                  >
                    Sv
                  </Button>
                </div>
                <div
                    style={{
                      backgroundColor: theme.palette.secondary.main,
                      padding: "4px",
                      clipPath:
                          "polygon(9px 0, 100% 0, calc(100% - 9px) 100%, 0 100%)",
                    }}
                >
                  <Button
                      sx={{
                        fontSize: 19,
                        borderRadius: 0,
/*                        backgroundColor:
                            i18n.language === "en" ? "#ffffff" : "primary.main",
                        color: i18n.language === "en" ? "primary.main" : "#ffff",*/
                        "&:hover": {
                          color: theme.palette.primary.main,
                          backgroundColor: "#fff",
                        },
                      }}
                      className={styles.languageBtn}
                  >
                    En
                  </Button>
                </div>
              </Box>
            </Toolbar>
            <Box
                sx={{
                  pb: 4,
                  flexGrow: 1,
                  display: { xs: "none", md: "block" },
                  alignItems: "center",
                  fontSize: 35,
                  fontFamily: "halogen",
                  fontWeight: 900,
                  whiteSpace: "nowrap",
                  wordWrap: "break-word",
                }}
                style={{ textAlign: "center" }}
            >
              <span style={{ color: "#fffff" }}>Vink </span>
              <span style={{ color: 'primary.dark' }}>
              - ja löydä tekemistä
            </span>
            </Box>
          </Container>
        </AppBar>
      </div>
  );
};

export default Navbar;