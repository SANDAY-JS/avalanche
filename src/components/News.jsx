import React from "react";
import Link from "next/link";
import styles from "../styles/components/News.module.scss";

function News() {
  return (
    <div className={styles.news}>
      <h2>News</h2>
      <div className={styles.news__container}>
        <div className={styles.news__container__block}>
          <Link href="https://t.co/P8Szd0Jf1h">
            <a className={styles.news__container__block__link}>
              【最新】AVALANCHE 1st Single「陽／さがしもの」リリーズ
            </a>
          </Link>
        </div>

        <div className={styles.news__container__block}>
          <Link href="/special-event">
            <a className={styles.news__container__block__link}>
              北近江FREAKY JAMMiN'2022 出演決定!!
            </a>
          </Link>
        </div>

        <div className={styles.news__container__block}>
          <Link href="/profile">
            <a className={styles.news__container__block__link}>
              AVALANCHEアカウント、始動
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default News;
