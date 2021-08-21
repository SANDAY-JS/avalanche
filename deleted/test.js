import React from "react";
import styles from "./test.module.css";

function test() {
  return (
    <div className={styles.test}>
      <h1 className={styles.text}>はじめに</h1>
      <h1 className={styles.text}>「バーチャリーズ」とは？</h1>
      <h1 className={styles.text}>プロフィール</h1>
      <h1 className={styles.text}>資金の使い道</h1>
      <h1 className={styles.text}>リターンについて</h1>
      <h1 className={styles.text}>実施スケジュール</h1>
      <h1 className={styles.text}>最後に</h1>
    </div>
  );
}

export default test;
