import React from "react";
import Link from "next/link";
import styles from "../styles/components/News.module.scss";
import db from "../pages/api/db/news.json";

function News() {
  return (
    <div className={styles.news}>
      <h2>News</h2>
      <div className={styles.news__container}>
        {db && db[0] ? (
          db.map((news, i) => (
            <div key={i} className={styles.news__container__block}>
              {news.url ? (
                <Link href={news.url} className={styles.news__container__block__link}>
                  {news.text}
                </Link>
              ) : (
                <p className={styles.news__container__block__link}>
                  {news.text}
                </p>
              )}
            </div>
          ))
        ) : (
          <p>現在のお知らせはございません。</p>
        )}
      </div>
    </div>
  );
}

export default News;
