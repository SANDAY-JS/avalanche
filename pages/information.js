import React from "react";
import Image from "next/image";
import img from "../public/images/band_purple.jpg";
import styles from "../styles/pages/Information.module.css";
import Layout from "../components/Layout";

function Information() {
  return (
    <Layout>
      <div className={styles.information}>
        <figure>
          <h2>Live Information</h2>
          <Image src={img} alt="avalanche-shiga" />
        </figure>
        <div className={styles.information__table}>
          <h3>ライブ予定↓</h3>
          <p>イベント名：10th Anniversary ~Lefa~ 次代へつなぐ道</p>
          <p>日時：1月23日</p>
          <p>場所：木之本スティックホール</p>
          {/* <small>＊詳細は後ほど掲載いたします。</small> */}
          <p>出演時間：後ほどお知らせ致します</p>
        </div>
      </div>
    </Layout>
  );
}

export default Information;
