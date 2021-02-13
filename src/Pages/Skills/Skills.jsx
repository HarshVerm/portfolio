import { Box, Container, Grid, Card } from "@material-ui/core";
import { skills } from "./skills-data";
import Image from "react-bootstrap/Image";

import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <div id="skills" className={styles.skills_container}>
      <Box className={styles.skills_wrapper}>
        <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
          SKILLS
        </h2>
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              className={styles.front_end_skill_container}>
              <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
                Front-End
              </h3>
              {skills.frontend.map((item, index) => (
                <Card className={styles.card_wrapper} key={index}>
                  <a href={item.link} target="blank">
                    <Grid item className={styles.card_wrapper_left}>
                      <div style={{ width: "45px" }}>
                        <img
                          src={item.imgSrc}
                          alt={item.imgAltText}
                          // width={100%}
                        />{" "}
                      </div>
                    </Grid>
                    <Grid
                      item
                      style={{ paddingTop: "10px", marginLeft: "5px" }}>
                      {item.skillName}
                    </Grid>
                  </a>
                </Card>
              ))}
            </Grid>
            <Grid item xs className={styles.back_end_skill_container}>
              <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
                Back-End
              </h3>
              {skills.backend.map((item, index) => (
                <Card className={styles.card_wrapper} key={index}>
                  <a href={item.link} target="blank">
                    <Grid item className={styles.card_wrapper_left}>
                      <div style={{ width: "45px" }}>
                        <img
                          src={item.imgSrc}
                          alt={item.imgAltText}
                          // width={100%}
                        />{" "}
                      </div>
                    </Grid>
                    <Grid
                      item
                      style={{ paddingTop: "10px", marginLeft: "5px" }}>
                      {item.skillName}
                    </Grid>
                  </a>
                </Card>
              ))}
              <br />
              <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
                Programming Languages
              </h3>
              {skills.programmingLanguages.map((item, index) => (
                <Card className={styles.card_wrapper} key={index}>
                  <a href={item.link} target="blank">
                    <Grid item className={styles.card_wrapper_left}>
                      <div style={{ width: "45px" }}>
                        <img
                          src={item.imgSrc}
                          alt={item.imgAltText}
                          // width={100%}
                        />{" "}
                      </div>
                    </Grid>
                    <Grid
                      item
                      style={{ paddingTop: "10px", marginLeft: "5px" }}>
                      {item.skillName}
                    </Grid>
                  </a>
                </Card>
              ))}
              <br />
              <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
                Database
              </h3>
              {skills.databases.map((item, index) => (
                <Card className={styles.card_wrapper} key={index}>
                  <a href={item.link} target="blank">
                    <Grid item className={styles.card_wrapper_left}>
                      <div style={{ width: "45px" }}>
                        <img
                          src={item.imgSrc}
                          alt={item.imgAltText}
                          // width={100%}
                        />{" "}
                      </div>
                    </Grid>
                    <Grid
                      item
                      style={{ paddingTop: "10px", marginLeft: "5px" }}>
                      {item.skillName}
                    </Grid>
                  </a>
                </Card>
              ))}
              <br />
              <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
                Version Control
              </h3>
              {skills.versionControl.map((item, index) => (
                <Card className={styles.card_wrapper} key={index}>
                  <a href={item.link} target="blank">
                    <Grid item className={styles.card_wrapper_left}>
                      <div style={{ width: "45px" }}>
                        <img
                          src={item.imgSrc}
                          alt={item.imgAltText}
                          // width={100%}
                        />{" "}
                      </div>
                    </Grid>
                    <Grid
                      item
                      style={{ paddingTop: "10px", marginLeft: "5px" }}>
                      {item.skillName}
                    </Grid>
                  </a>
                </Card>
              ))}
            </Grid>
            {/* <Grid item xs className={styles.database_skill_container}>
              3
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
