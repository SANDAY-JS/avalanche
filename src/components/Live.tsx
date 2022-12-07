import React, { useEffect, useState } from "react";
import styles from "../styles/components/Live.module.scss";
import { db } from "../../firebase";
import LiveTable from "./LiveTable";

const Live = (): JSX.Element => {
  // Live Data
  const [data, setData] = useState<LiveInfoType[]>([]);

  useEffect(() => {
    (async() => {
      await fetchDraft();
    })()
  }, []);

  const fetchDraft = async () => {
    // firebaseからデータを取得
    const isProduction = process.env.NODE_ENV === "production";

    let events: LiveInfoType[] = [];
    await db.collection(isProduction ? "live_info" : "draft").get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
        if(!doc.data()) return;
        events.push(doc.data() as LiveInfoType)
        events = events.sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date)))
      })})
      .then(() => setData(events))
  };

  return (
    <div className={styles.live} id="live">
      <h2 className={styles.live__table__title}>Live Information</h2>
      <div className={styles.live__container}>
        {data?.map((event, i) => 
          <LiveTable key={i} event={event} />
        )}
      </div>
    </div>
  );
}

export default Live;
