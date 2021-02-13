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
                <br />A passionate programmer, born in a small village of
                Kannauj, U.P. and brought up in Sambhal, U.P.. I am a Full Stack
                Web Developer with React.js, Redux, Express.js, Node.js, and
                MongoDB as my tech stack. In 2019, I successfully completed my
                gaduation Bachelor in Computer Application. Working with the
                clients, my goal is always driven towards providing amazing
                experience with the best level of quality and service to them. I
                love learning about new technologies, what problems are they
                solving and How can I use them to build better and scalable
                products.
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </div>
          <div>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item xs={10} sm={8}>
                <Button variant="outlined" className={classes.btn}>
                  RESUME
                </Button>
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </div>
        </Container>
      </Box>
    </Box>
  );
}
