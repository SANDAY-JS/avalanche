import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import img from "../../public/images/band_purple.jpg";
import styles from "../styles/pages/live.module.scss";
import Layout from "../components/Layout";
import { db } from "../../firebase";

function Live({}) {
  const dateArr = ["日", "月", "火", "水", "木", "金", "土"];

  const [draft, setDraft] = useState();

  useLayoutEffect(() => {
    fetchDraft();
  }, []);

  const fetchDraft = () => {
    // firebaseからデータを取得
    const draftRef = db.collection("draft").doc("information");
    if (!draftRef) return;

    draftRef.get().then((doc) => {
      if (!doc.exists) return;

      return setDraft(doc.data());
    });
  };

  const adjustDate = (date) => {
    const baseDate = new Date(date);
    const dayOfWeekNum = baseDate.getDay();
    const dayOfWeek = dateArr[dayOfWeekNum];

    const splitDate = date.split("-");
    const newDate = `${splitDate[0]}年 ${splitDate[1]}月 ${splitDate[2]}日(${dayOfWeek})`;

    return newDate;
  };

  return (
    <Layout>
      <div className={styles.live}>
        <div className={styles.live__container}>
          <figure>
            <h2>Live Information</h2>
            <Image src={img} alt="avalanche-shiga" />
          </figure>
          <div className={styles.live__table}>
            <h3 className={styles.live__table__title}>ライブ予定</h3>
            {draft ? (
              <>
                <div className={styles.live__table__content}>
                  <p>イベント名：</p>
                  <p>{draft.eventName ? draft.eventName : "未定"}</p>
                </div>
                <div className={styles.live__table__content}>
                  <p>日時：</p>
                  <p>{draft.date ? `${adjustDate(draft.date)}` : "未定"}</p>
                </div>
                <div className={styles.live__table__content}>
                  <p>出演時間：</p>
                  <p>{draft.time ? `${draft.time}～` : "未定"}</p>
                </div>
                <div className={styles.live__table__content}>
                  <p>場所：</p>
                  <p>{draft.place ? draft.place : "未定"}</p>
                </div>
                {draft.detail && (
                  <div className={styles.live__table__content}>
                    <p>詳細：</p>
                    <p>{draft.detail}</p>
                  </div>
                )}
              </>
            ) : (
              <>
                <p>読み込み中...</p>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Live;
