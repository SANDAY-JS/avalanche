import React from "react";
import Link from "next/link";
import styles from "../styles/components/News.module.scss";

function News() {
  return (
    <div className={styles.news}>
      <h2>News</h2>
      <div className={styles.news__container}>
        <div className={styles.news__container__block}>
          <Link href="/#live">
            <a className={styles.news__container__block__link}>
              新着ライブ情報
            </a>
          </Link>
        </div>

        <div className={styles.news__container__block}>
          <Link href="/special-event">
            <a className={styles.news__container__block__link}>
              【最新情報】北近江FREAKY JAMMiN'2022 出演決定!!
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
