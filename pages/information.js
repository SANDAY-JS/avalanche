import React from "react";
import Image from "next/image";
import img from "../public/images/live_pic2.jpg";
import styles from "../styles/pages/Information.module.css";
import Layout from "./components/Layout";

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
          <p>イベント名：後ほどお知らせします。</p>
          <p>日時：８月中旬</p>
          <p>場所：後ほどお知らせします。</p>
          <small>＊詳細は後ほど掲載いたします。</small>
        </div>
      </div>
    </Layout>
  );
}

export default Information;
