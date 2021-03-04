import React from "react";
import styles from "./Project.module.css";
import { Container, Box, Grid, Card } from "@material-ui/core";
// import Timeline from "@material-ui/lab/Timeline";
// import TimelineItem from "@material-ui/lab/TimelineItem";
// import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
// import TimelineConnector from "@material-ui/lab/TimelineConnector";
// import TimelineContent from "@material-ui/lab/TimelineContent";
// import TimelineDot from "@material-ui/lab/TimelineDot";
// import linkedin from "../../images/project/linkedIn.PNG";
import amazon from "../../images/project/amazon.png";
import ketnipz from "../../images/project/ketnipz.png";
import indeed from "../../images/project/indeed.png";
import currency from "../../images/project/currency.png";
import expense from "../../images/project/expense.png";
import linkedin from "../../images/project/linkedIn.PNG";
import useMediaQuery from "react-use-media-query-hook";

export function Projects() {
  const isMobile = useMediaQuery("(max-width: 400px)");
  const isTablet = useMediaQuery("(min-width: 401px) and (max-width: 670px)");
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
            <Grid item xs={12} sm={6} md={4}>
              <Box className={styles.project_card_container}>
                <Card className={styles.card_container}>
                  <Container className="amazon">
                    <div className={styles.project_image}>
                      <img
                        src={amazon}
                        alt="Project"
                        width="100"
                        height="180"
                      />
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
                          An online OTT platform, where users can watch movies
                          and series.
                        </div>

                        <div className={styles.bold}>Features :</div>
                        <ul>
                          <li>Validate registration and login</li>
                          <li>Movie search by title.</li>
                          <li>Integrated payment method</li>
                          <li>Video play</li>
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
                          <em className={styles.disabled_btn}>MongoDB </em>
                          <em className={styles.disabled_btn}>Express </em>
                          <em className={styles.disabled_btn}>Node Js </em>
                        </div>
                      </Container>
                    </div>
                    <div className={styles.card_footer}>
                      <a
                        className={styles.btn}
                        href="https://github.com/HarshVerm/primevideo"
                        target="blank">
                        Source Code
                      </a>
                      {/* <a className={styles.btn}>Source Live </a> */}
                      <a
                        className={styles.btn}
                        target="blank"
                        href="https://drive.google.com/file/d/14OhRCfhRMOsqTcwXc8bD403Hw_k5NmKM/view?usp=sharing">
                        Demo Video
                      </a>
                    </div>
                  </Container>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box className={styles.project_card_container}>
                <Card className={styles.card_container}>
                  <Container>
                    <div className={styles.project_image}>
                      <img
                        src={ketnipz}
                        alt="Project"
                        width="100"
                        height="180"
                      />
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
                          An online shopping website for accessories.
                        </div>

                        <div className={styles.bold}>Features :</div>
                        <ul>
                          <li>Integrated payment method</li>
                          <li>Add or remove products into the cart</li>
                          <li>Place order</li>
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
                          <em className={styles.disabled_btn}>MongoDB </em>
                          <em className={styles.disabled_btn}>Express </em>
                          <em className={styles.disabled_btn}>Node Js </em>
                        </div>
                      </Container>
                    </div>
                    <div className={styles.card_footer}>
                      {/* <a className={styles.btn}>See Live </a> */}
                      <a
                        className={styles.btn}
                        href="https://github.com/HarshVerm/ShoppingCart"
                        target="blank">
                        Source Code{" "}
                      </a>
                      <a
                        className={styles.btn}
                        target="blank"
                        href="https://ketnipz-clone.vercel.app/">
                        Live Demo
                      </a>
                    </div>
                  </Container>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box className={styles.project_card_container}>
                <Card className={styles.card_container}>
                  <Container>
                    <div className={styles.project_image}>
                      <img
                        src={indeed}
                        alt="Project"
                        width="100"
                        height="180"
                      />
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
                          An online job portal.
                        </div>

                        <div className={styles.bold}>Features :</div>
                        <ul>
                          <li>Job search, job filter</li>
                          <li>Recent searches</li>
                          <li> Posting new job</li>
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
                          {/* <em className={styles.disabled_btn}>Mongo </em>
                          <em className={styles.disabled_btn}>Express </em>
                          <em className={styles.disabled_btn}>Node Js </em> */}
                        </div>
                      </Container>
                    </div>
                    <div className={styles.card_footer}>
                      {/* <a className={styles.btn}>See Live </a> */}
                      <a
                        className={styles.btn}
                        href="https://github.com/HarshVerm/IndeedReactClone"
                        target="blank">
                        Source Code{" "}
                      </a>
                      <a
                        className={styles.btn}
                        href="https://indeedclone.vercel.app/#/login"
                        target="blank">
                        Live Demo
                      </a>
                      {/* <a className={styles.btn}>View Video </a> */}
                    </div>
                  </Container>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box className={styles.project_card_container}>
                <Card className={styles.card_container}>
                  <Container>
                    <div className={styles.project_image}>
                      <img
                        src={linkedin}
                        alt="Project"
                        width="100"
                        height="180"
                      />
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
                          Social network that focuses on professional networking
                          and career development
                        </div>

                        <div className={styles.bold}>Features :</div>
                        <ul>
                          <li>Create Post</li>
                          <li>Add Comment</li>
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
                          <em className={styles.disabled_btn}>
                            Styled Component
                          </em>
                          <em className={styles.disabled_btn}>React </em>
                          {/* <em className={styles.disabled_btn}>Redux </em> */}
                          {/* <em className={styles.disabled_btn}>Mongo </em>
                          <em className={styles.disabled_btn}>Express </em>
                          <em className={styles.disabled_btn}>Node Js </em> */}
                        </div>
                      </Container>
                    </div>
                    <div className={styles.card_footer}>
                      {/* <a className={styles.btn}>See Live </a> */}
                      <a
                        className={styles.btn}
                        href="https://github.com/HarshVerm/LinkedIn-Clone"
                        target="blank">
                        Source Code{" "}
                      </a>
                      <a
                        className={styles.btn}
                        href="https://linkedin-clone10.vercel.app/signin"
                        target="blank">
                        Live Demo
                      </a>
                      {/* <a className={styles.btn}>View Video </a> */}
                    </div>
                  </Container>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box className={styles.project_card_container}>
                <Card className={styles.card_container}>
                  <Container>
                    <div className={styles.project_image}>
                      <img
                        src={currency}
                        alt="Project"
                        width="100"
                        height="180"
                      />
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
                          Online currency convert USD to other.
                        </div>

                        <div className={styles.bold}>Features :</div>
                        <ul>
                          <li>Convert currency USD to other</li>
                          <li>check live currency rate</li>
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
                          <em className={styles.disabled_btn}>Javascript</em>
                          {/* <em className={styles.disabled_btn}>Mongo </em>
                          <em className={styles.disabled_btn}>Express </em>
                          <em className={styles.disabled_btn}>Node Js </em> */}
                        </div>
                      </Container>
                    </div>
                    <div className={styles.card_footer}>
                      {/* <a className={styles.btn}>See Live </a> */}
                      <a
                        className={styles.btn}
                        href="https://github.com/HarshVerm/currency_converter"
                        target="blank">
                        Source Code{" "}
                      </a>
                      {/* <a className={styles.btn}>Live Demo</a> */}
                      {/* <a className={styles.btn}>View Video </a> */}
                    </div>
                  </Container>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box className={styles.project_card_container}>
                <Card className={styles.card_container}>
                  <Container>
                    <div className={styles.project_image}>
                      <img
                        src={expense}
                        alt="Project"
                        width="100"
                        height="180"
                      />
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
                          Expense manager for all credit and debits.
                        </div>

                        <div className={styles.bold}>Features :</div>
                        <ul>
                          <li>Login/Register</li>
                          <li>Add or remove expenses</li>
                          <li>check ledger</li>
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
                          <em className={styles.disabled_btn}>JavaScript</em>
                          {/* <em className={styles.disabled_btn}>Mongo </em>
                          <em className={styles.disabled_btn}>Express </em>
                          <em className={styles.disabled_btn}>Node Js </em> */}
                        </div>
                      </Container>
                    </div>
                    <div className={styles.card_footer}>
                      {/* <a className={styles.btn}>See Live </a> */}
                      <a
                        className={styles.btn}
                        href="https://github.com/HarshVerm/expense-manager"
                        target="blank">
                        Source Code{" "}
                      </a>
                      <a
                        className={styles.btn}
                        href="https://harshverm.github.io/expense-manager/index.html"
                        target="blank">
                        Live Demo
                      </a>
                      {/* <a className={styles.btn}>View Video </a> */}
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
