import React from "react";
import News from "./components/News";
import Slider from "./components/Slider";
import styles from "../styles/pages/TopPage.module.css";

function TopPage() {
  return (
    <div className={styles.toppage}>
      <Slider />
      <News />
    </div>
  );
}

export default TopPage;
