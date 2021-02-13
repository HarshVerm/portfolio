import React, { useEffect } from "react";
import { AppBar, Toolbar, Container, Grid, Box } from "@material-ui/core";
import styles from "./Navbar.module.css";
import { makeStyles } from "@material-ui/styles";
import logo from "../../logo.ico";
import useMediaQuery from "react-use-media-query-hook";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  appBar: {
    position: "sticky",
    top: "0",
    boxShadow: "none",
    backgroundColor: "#00cba9",
    height: "50px",
    animation: "moveDown 0.5s ease-in-out",
    " @keyframes moveDown": {
      from: {
        transform: `translateY(-5rem)`,
      },
      to: {
        transform: `translateY(0rem)`,
      },
    },
    // lineHeight: 1.5,
    // opacity: "0.5",
  },
  toolbar: {
    maxHeight: "50px",
    alignItems: "center",
  },
}));

export function Navbar() {
  useEffect(() => {});
  const isMobile = useMediaQuery("(max-width: 400px)");
  const isTablet = useMediaQuery("(min-width: 401px) and (max-width: 640px)");
  const isDesktop = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1025px)");
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      {/* <Toolbar className={classes.toolbar}> */}
      <Container style={{ height: "100%" }}>
        <Box
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
          {/* <div>
              <img src={logo} width={150} height={50} />
            </div> */}
          {isMobile || isTablet ? (
            <div>
              <Container>
                <MenuIcon />
              </Container>
            </div>
          ) : (
            <ul className={styles.ul_list}>
              <li>
                <div>
                  <a href="#home">Home</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="#about">About</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="#skills">Skills</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="#project">Project</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="#contact">Contact</a>
                </div>
              </li>
            </ul>
          )}
        </Box>
      </Container>
      {/* </Toolbar> */}
    </AppBar>
  );
}

// const isTablet = useMediaQuery('(min-width: 401px) and (max-width: 640px)');
