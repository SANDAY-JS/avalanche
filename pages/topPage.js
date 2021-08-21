import React from "react";
import styles from "../styles/pages/TopPage.module.css";
import News from "../components/News";
import Slider from "../components/Slider";

function TopPage() {
  return (
    <div className={styles.toppage}>
      <Slider />
      <News />
    </div>
  );
}

export default TopPage;
