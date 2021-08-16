import React from "react";
import Link from "next/link";
import styles from "./News.module.css";

function News() {
  return (
    <div className={styles.news}>
      <h2>~News~</h2>
      <div className={styles.news__table}>
        <h3>1.新着ライブ情報</h3>
        <p>
          詳しくは
          <Link href="/information">
            <a>こちら</a>
          </Link>
        </p>
        <h3>2.AVALANCHEアカウント、始動</h3>
        <p>
          詳しくは
          <Link href="/profile">
            <a>こちら</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default News;
