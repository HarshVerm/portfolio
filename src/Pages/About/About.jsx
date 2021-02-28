import React from "react";
import styles from "./About.module.css";
import { Box, Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  btn: {
    borderColor: " #492b7c",
    color: " #492b7c",
    "&:hover": {
      backgroundColor: " #492b7c",
      color: "white",
    },
    // #492b7c
    // #e17055
  },
  resume: {
    textDecoration: "none",
  },
}));

export function About() {
  const classes = useStyles();
  return (
    <Box id="about" className={styles.about_container}>
      <Box className={styles.about_wapper}>
        <Container>
          <h2 style={{ textDecoration: "underline" }}>ABOUT</h2>
          <div className={styles.about_content}>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item xs={10} sm={8}>
                <div>
                  Hi there! I am{" "}
                  <span style={{ fontWeight: "bold" }}>Harsh Verma</span>
                </div>
                <br />A passionate programmer, from Sambhal, U.P. I am a Full
                Stack Web Developer with React.js, Redux, Express.js, Node.js,
                MongoDB as my tech stack. In 2019, I successfully completed my
                graduation Bachelors in Computer Application. I love learning
                about new technologies, what problems are they solving and how
                can I use them to build better and scalable products.
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </div>
          <div>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item xs={10} sm={8}>
                <a
                  className={classes.resume}
                  href="https://drive.google.com/file/d/1JY29nZ9TzPG4U7ig6jlK9wblxmcukLxV/view?usp=sharing"
                  download
                  target="blank">
                  <Button variant="outlined" className={classes.btn}>
                    RESUME
                  </Button>
                </a>
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </div>
        </Container>
      </Box>
    </Box>
  );
}
