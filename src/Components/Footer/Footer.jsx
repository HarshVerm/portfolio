import React from "react";
// import { Box, Grid } from "@material-ui/core";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      harsh
      <div>
        <span className={styles.designing} style={{ color: "white" }}>
          Designed & Developed by{" "}
        </span>
        <span>Harsh Verma</span>
      </div>
    </div>
  );
}
