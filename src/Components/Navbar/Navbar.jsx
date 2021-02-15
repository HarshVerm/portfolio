import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Container, Grid, Box } from "@material-ui/core";
import styles from "./Navbar.module.css";
import { makeStyles } from "@material-ui/styles";
import logo from "../../logo.ico";
import useMediaQuery from "react-use-media-query-hook";
import MenuIcon from "@material-ui/icons/Menu";
import { Sidebar } from "./Sidebar";

const useStyles = makeStyles(() => ({
  appBar: {
    position: "sticky",
    top: "0",
    boxShadow: "none",
    backgroundColor: "#00cba9",
    // height: "50px",
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
  const isTablet = useMediaQuery("(min-width: 401px) and (max-width: 670px)");
  const isDesktop = useMediaQuery("(min-width: 671px) and (max-width: 1024px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1025px)");

  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if ((isDesktop || isLargeDesktop) && open) {
      setOpen(false, isDesktop);
    }
  }, [isLargeDesktop, isDesktop]);

  return (
    <>
      <AppBar className={classes.appBar}>
        {/* <Toolbar className={classes.toolbar}> */}
        <Container style={{ height: "100%" }}>
          {/* <div>
              <img src={logo} width={150} height={50} />
            </div> */}
          {isMobile || isTablet ? (
            <div className={styles.small_navbar_cotainer}>
              <Container
                className={styles.small_navbar}
                style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <MenuIcon />
                </div>
                <div onClick={() => setOpen(!open)}>
                  <MenuIcon />
                </div>
              </Container>
              {open && (
                <Container className={styles.small_screen}>
                  <ul>
                    <li onClick={() => setOpen(false)}>
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
                </Container>
              )}
            </div>
          ) : (
            <Box
              style={{
                height: "50px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>
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
            </Box>
          )}
        </Container>
        {/* </Toolbar> */}
      </AppBar>
      {/* <Sidebar /> */}
    </>
  );
}

// const isTablet = useMediaQuery('(min-width: 401px) and (max-width: 640px)');
