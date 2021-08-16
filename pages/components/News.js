import React from "react";
import Link from "next/link";
import styles from "./News.module.css";

function News() {
  return (
    <div className={styles.news}>
      <h2>~News~</h2>
      <div className={styles.news__container}>
        <div className={styles.news__container__block}>
          <Link
            className={styles.news__container__block__link}
            href="/information"
          >
            <a>新着ライブ情報</a>
          </Link>
        </div>

        <div className={styles.news__container__block}>
          <Link className={styles.news__container__block__link} href="/profile">
            <a>AVALANCHEアカウント、始動</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default News;
