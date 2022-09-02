import React from "react";
import styles from "../styles/components/TopPage.module.scss";
import Slider from "./Slider";

function TopPage() {
  return (
    <div className={styles.toppage}>
      <Slider />
    </div>
  );
}

export default TopPage;
