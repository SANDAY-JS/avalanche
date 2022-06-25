import React, { useLayoutEffect, useState } from "react";
import styles from "../styles/components/Live.module.scss";
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
    <div className={styles.live} id="live">
      <h2 className={styles.live__table__title}>Live Information</h2>
      <div className={styles.live__container}>
        <table className={styles.live__table}>
          <tbody>
            <tr className={styles.live__table__content}>
              <td>イベント名</td>
              <td className={draft ? '' : styles.loading}>{!draft ? '' : draft.eventName ? draft.eventName : "未定"}</td>
            </tr>
            <tr className={styles.live__table__content}>
              <td>日時</td>
              <td className={draft ? '' : styles.loading}>{!draft ? '' : draft.date ? `${adjustDate(draft.date)}` : "未定"}</td>
            </tr>
            <tr className={styles.live__table__content}>
              <td>出演時間</td>
              <td className={draft ? '' : styles.loading}>{!draft ? '' : draft.time ? `${draft.time}～` : "未定"}</td>
            </tr>
            <tr className={styles.live__table__content}>
              <td>場所</td>
              <td className={draft ? '' : styles.loading}>{!draft ? '' : draft.place ? draft.place : "未定"}</td>
            </tr>
            <tr className={styles.live__table__content}>
              <td>詳細</td>
              <td className={draft ? '' : styles.loading}>{!draft ? '' :  draft.detail ?? ''}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Live;
