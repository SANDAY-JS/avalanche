import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../public/images/band_purple.jpg";
import styles from "../styles/pages/Information.module.css";
import Layout from "../components/Layout";
import { db } from "../../firebase";

function Information({}) {
  const [draft, setDraft] = useState();

  useEffect(() => {
    fetchDraft()
  }, []);

  const fetchDraft = () =>{
    // firebaseからデータを取得
    const draftRef = db.collection("draft").doc("information");
    if (!draftRef) return;

    draftRef.get().then((doc) => {
      if (!doc.exists) return;

      return setDraft(doc.data());
    });
  }

  return (
    <Layout>
      <div className={styles.information}>
        <figure>
          <h2>Live Information</h2>
          <Image src={img} alt="avalanche-shiga" />
        </figure>
        <div className={styles.information__table}>
          <h3>ライブ予定↓</h3>
          {draft? (
            <>
              <p>イベント名：{draft.eventName ? draft.eventName : "未定"}</p>
              <p>日時：{draft.date ? draft.date : "未定"}</p>
              <p>出演時間：{draft.time ? draft.time : "未定"}</p>
              <p>場所：{draft.place ? draft.place : "未定"}</p>
              <p>{draft.detail && `詳細：${draft.detail}`}</p>
            </>
          ) : (
            <>
            <p>予定が決まり次第お伝え致します。</p>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Information;
