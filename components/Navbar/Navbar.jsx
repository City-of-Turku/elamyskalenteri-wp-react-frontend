import Link from "next/link";

// const Navbar = () => {
//   return (
//       <div>
//       <Container maxWidth="xl">
//         <MenuIcon />
//         <div style={{ height: 250, backgroundColor: "#F26835", padding: 24, display: "flex", justifyContent: "space-between"}}>
//           <h1 style={{ color: "#ffffff"}}>VINK</h1>
//           <div style={{ display: "flex", gap: 8}}>
//             <Link href={"/fi"}>
//               <button style={{ height: 40, width: 40, fontSize: 24, backgroundColor: "transparent", outline: "none", border: "1px solid #193773", color: "#193773", cursor: "pointer"}}>
//                 fi
//               </button>
//             </Link>
//             <Link href={"/sv"}>
//               <button style={{ height: 40, width: 40, fontSize: 24, backgroundColor: "transparent", outline: "none", border: "1px solid #193773", color: "#193773", cursor: "pointer"}}>
//                 sv
//               </button>
//             </Link>
//             <Link href={"/en"}>
//               <button style={{ height: 40, width: 40, fontSize: 24, backgroundColor: "transparent", outline: "none", border: "1px solid #193773", color: "#193773", cursor: "pointer"}}>
//                 en
//               </button>
//             </Link>
//           </div>
//         </div>
//       </Container>
//       </div>
//   )
// }
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
                <a href={"/"}>
                  <Image className={classes.logo} src={vinkLogo} alt="Vink logo" />
                </a>
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
                    sx={{ color: "secondary.main", fontSize: 19 }}
                    onClick={() => handleButtonClick("/")}
                >
                  {/*{`${t("events")}`}*/}
                </Button>
                <Button
                    sx={{ color: "secondary.main", fontSize: 19 }}
                    onClick={() => handleButtonClick("/hobbies")}
                >
                 {/* {`${t("hobbies")}`}*/}
                </Button>
                <Button
                    sx={{ color: "secondary.main", fontSize: 19 }}
                    onClick={() => handleButtonClick("/educations")}
                >
                  {/*{`${t("educations")}`}*/}
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
                      backgroundColor: 'secondary.main',
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
                          color: 'primary.main',
                          backgroundColor: "#fff",
                        },
                      }}
                  >
                    Fi
                  </Button>
                </div>

                <div
                    style={{
                      backgroundColor: 'secondary.main',
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
                          color: 'primary.main',
                          backgroundColor: "#fff",
                        },
                      }}
                  >
                    Sv
                  </Button>
                </div>
                <div
                    style={{
                      backgroundColor: 'secondary.main',
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
                          color: 'primary.main',
                          backgroundColor: "#fff",
                        },
                      }}
                      className={styles.languageBtn}
                      onClick={() => i18n.changeLanguage("en")}
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