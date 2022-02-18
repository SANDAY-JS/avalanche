import React from "react";
import styles from "../styles/components/TopPage.module.scss";
import News from "./News";
import Slider from "./Slider";

function TopPage() {
  return (
    <div className={styles.toppage}>
      <Slider />
      <News />
    </div>
  );
}

export default TopPage;
