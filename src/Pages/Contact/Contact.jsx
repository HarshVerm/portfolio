import React from "react";
import { Box, Grid } from "@material-ui/core";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <div id="contact" className={styles.contact}>
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs={10} md={7}>
          <div className={styles.heading}>
            <span>Get</span> In Touch
          </div>
          <div className={styles.content}>
            <p>
              For any information regarding my work kindly, contact me though
              the following phone number or email address.
            </p>
          </div>
          <div className={styles.subheading_container}>
            <span className={styles.subheading}>Phone No : </span>
            <span>+91 9557098292, 9627327621 </span>
          </div>
          <div>
            <span className={styles.subheading}>Email : </span>
            <span>harsh99verma8@gmail.com</span>
          </div>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}
