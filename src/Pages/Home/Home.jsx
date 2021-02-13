import React from "react";
import { Container, Card, Grid, Box } from "@material-ui/core";
import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";
import ScrollReveal from "scrollreveal";
import profile from "../../images/profile.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import useMediaQuery from "react-use-media-query-hook";

export function Home() {
  const isMobile = useMediaQuery("(max-width: 400px)");
  const isTablet = useMediaQuery("(min-width: 401px) and (max-width: 640px)");
  const isDesktop = useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1025px)");
  return isMobile || isTablet ? (
    <div id="home" className={styles.home_container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles.img_svg}>
        <path
          fill="#00cba9"
          fillOpacity="1"
          d="M0,192L48,208C96,224,192,256,288,272C384,288,480,288,576,250.7C672,213,768,139,864,144C960,149,1056,235,1152,250.7C1248,267,1344,213,1392,186.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <div className={styles.content_wapper}>
        <Container>
          <Grid container direction="row">
            <Grid item xs={12} className={styles.right_container_small}>
              <div className={styles.img_container}>
                <img src={profile} width="200" alt="" />
              </div>
              <br />
              <div className={styles.social_icons}>
                <ul>
                  <li>
                    <Card>
                      <a href="#">
                        <LinkedInIcon className={styles.icons} />
                      </a>
                    </Card>
                  </li>
                  <li>
                    <Card>
                      <a href="#">
                        <GitHubIcon className={styles.icons} />
                      </a>
                    </Card>
                  </li>
                  <li>
                    <Card>
                      <a href="#">
                        <TwitterIcon className={styles.icons} />
                      </a>
                    </Card>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs className={styles.left_container}>
              <div>
                <div>
                  <div>Hi, I' am</div>
                  <div>
                    <span>Harsh Verma</span>
                  </div>
                  <div>
                    <span> I am </span>
                    <Typewriter
                      options={{
                        strings: ["Developer", "Learner"],
                        autoStart: true,
                        loop: true,
                      }}
                      className={styles.typewriter}
                    />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  ) : (
    <div id="home" className={styles.home_container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles.img_svg}>
        <path
          fill="#00cba9"
          fillOpacity="1"
          d="M0,192L48,208C96,224,192,256,288,272C384,288,480,288,576,250.7C672,213,768,139,864,144C960,149,1056,235,1152,250.7C1248,267,1344,213,1392,186.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <div className={styles.content_wapper}>
        <Container>
          <Grid container direction="row">
            <Grid item xs className={styles.left_container}>
              <div>
                <div>
                  <div>Hi, I' am</div>
                  <div>
                    <h2>Harsh Verma</h2>
                  </div>
                  <div>
                    <span>
                      <Typewriter
                        options={{
                          strings: ["Developer", "Learner"],
                          autoStart: true,
                          loop: true,
                        }}
                        className={styles.typewriter}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} className={styles.right_container}>
              <div className={styles.img_container}>
                <img src={profile} width="200" alt="" />
              </div>
              <br />
              <div className={styles.social_icons}>
                <ul>
                  <li>
                    <Card className={styles.icon_wrapper_card}>
                      <a href="#">
                        <LinkedInIcon className={styles.icons} />
                      </a>
                    </Card>
                  </li>
                  <li>
                    <Card>
                      <a href="#">
                        <GitHubIcon className={styles.icons} />
                      </a>
                    </Card>
                  </li>
                  <li>
                    <Card>
                      <a href="#">
                        <TwitterIcon className={styles.icons} />
                      </a>
                    </Card>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

// ScrollReveal().reveal('.headline');
// ScrollReveal().reveal('.tagline', { delay: 500 });
