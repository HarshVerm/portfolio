import React from "react";
import styles from "./Project.module.css";
import { Container, Box, Grid, Card, Divider, Button } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import linkedin from "../../images/project/linkedIn.PNG";
import amazon from "../../images/project/amazon.png";
import useMediaQuery from "react-use-media-query-hook";

export function Projects() {
  const isMobile = useMediaQuery("(max-width: 400px)");
  const isTablet = useMediaQuery("(min-width: 401px) and (max-width: 640px)");
  const isDesktop = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1025px)");
  return (
    <div id="project" className={styles.project_container}>
      <Box>
        <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
          PROJECTS
        </h2>
        <br />
        <Container>
          <Grid container>
            <Grid xs={12} sm={6} md={4}>
              <Box className={styles.project_card_container}>
                <Card className={styles.card_container}>
                  <Container>
                    <div className={styles.project_image}>
                      <img src={amazon} alt="Project" />
                    </div>
                    {/* <div>
                      <div className={styles.show_details}>
                        <span>SHOW DETAILS</span>
                      </div>
                    </div> */}
                    <div>
                      <Container className={styles.details}>
                        <div>
                          <span className={styles.bold}>Description : </span>
                          This is clone of amazon prime video creaded with React
                          and Material UI
                        </div>

                        <div className={styles.bold}>Features :</div>
                        <ul>
                          <li>Search Movies, TV shows by title.</li>
                          <li>Movie add and remove from watch list</li>
                          <li>Customize video player</li>
                        </ul>

                        <div
                          className={styles.bold}
                          style={{ marginBottom: "10px" }}>
                          Tech Used:
                        </div>
                        {/* <div> */}
                        <div>
                          <em className={styles.disabled_btn}>HTML</em>
                          <em className={styles.disabled_btn}>CSS</em>
                          <em className={styles.disabled_btn}>Material UI</em>
                          <em className={styles.disabled_btn}>React </em>
                          <em className={styles.disabled_btn}>Redux </em>
                          <em className={styles.disabled_btn}>Mongo </em>
                          <em className={styles.disabled_btn}>Express </em>
                          <em className={styles.disabled_btn}>Node Js </em>
                        </div>
                      </Container>
                    </div>
                    <div className={styles.card_footer}>
                      <a className={styles.btn}>See Live </a>
                      <a className={styles.btn}>Source Live </a>
                      <a className={styles.btn}>View Video </a>
                    </div>
                  </Container>
                </Card>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <Box className={styles.project_card_container}>
                <Card className={styles.card_container}>
                  <Container>
                    <div className={styles.project_image}>
                      <img src={amazon} alt="Project" />
                    </div>
                    {/* <div>
                      <div className={styles.show_details}>
                        <span>SHOW DETAILS</span>
                      </div>
                    </div> */}
                    <div>
                      <Container className={styles.details}>
                        <div>
                          <span className={styles.bold}>Description : </span>
                          This is clone of amazon prime video creaded with React
                          and Material UI
                        </div>

                        <div className={styles.bold}>Features :</div>
                        <ul>
                          <li>Search Movies, TV shows by title.</li>
                          <li>Movie add and remove from watch list</li>
                          <li>Customize video player</li>
                        </ul>

                        <div
                          className={styles.bold}
                          style={{ marginBottom: "10px" }}>
                          Tech Used:
                        </div>
                        {/* <div> */}
                        <div>
                          <em className={styles.disabled_btn}>HTML</em>
                          <em className={styles.disabled_btn}>CSS</em>
                          <em className={styles.disabled_btn}>Material UI</em>
                          <em className={styles.disabled_btn}>React </em>
                          <em className={styles.disabled_btn}>Redux </em>
                          <em className={styles.disabled_btn}>Mongo </em>
                          <em className={styles.disabled_btn}>Express </em>
                          <em className={styles.disabled_btn}>Node Js </em>
                        </div>
                      </Container>
                    </div>
                    <div className={styles.card_footer}>
                      <a className={styles.btn}>See Live </a>
                      <a className={styles.btn}>Source Live </a>
                      <a className={styles.btn}>View Video </a>
                    </div>
                  </Container>
                </Card>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
              <Box className={styles.project_card_container}>
                <Card className={styles.card_container}>
                  <Container>
                    <div className={styles.project_image}>
                      <img src={amazon} alt="Project" />
                    </div>
                    {/* <div>
                      <div className={styles.show_details}>
                        <span>SHOW DETAILS</span>
                      </div>
                    </div> */}
                    <div>
                      <Container className={styles.details}>
                        <div>
                          <span className={styles.bold}>Description : </span>
                          This is clone of amazon prime video creaded with React
                          and Material UI
                        </div>

                        <div className={styles.bold}>Features :</div>
                        <ul>
                          <li>Search Movies, TV shows by title.</li>
                          <li>Movie add and remove from watch list</li>
                          <li>Customize video player</li>
                        </ul>

                        <div
                          className={styles.bold}
                          style={{ marginBottom: "10px" }}>
                          Tech Used:
                        </div>
                        {/* <div> */}
                        <div>
                          <em className={styles.disabled_btn}>HTML</em>
                          <em className={styles.disabled_btn}>CSS</em>
                          <em className={styles.disabled_btn}>Material UI</em>
                          <em className={styles.disabled_btn}>React </em>
                          <em className={styles.disabled_btn}>Redux </em>
                          <em className={styles.disabled_btn}>Mongo </em>
                          <em className={styles.disabled_btn}>Express </em>
                          <em className={styles.disabled_btn}>Node Js </em>
                        </div>
                      </Container>
                    </div>
                    <div className={styles.card_footer}>
                      <a className={styles.btn}>See Live </a>
                      <a className={styles.btn}>Source Live </a>
                      <a className={styles.btn}>View Video </a>
                    </div>
                  </Container>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
