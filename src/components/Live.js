import React, { useEffect, useState } from "react";
import styles from "../styles/components/Live.module.scss";
import { db } from "../../firebase";
import LiveTable from "./LiveTable";

function Live({}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDraft();
  }, []);

  const fetchDraft = async () => {
    // firebaseからデータを取得
    const isProduction = process.env.NODE_ENV === "production";

    await db.collection(isProduction ? "live_info" : "draft").get()
            .then(querySnapshot => {
              querySnapshot.docs.forEach(doc => {
              const newData = data;
              newData.push(doc.data())
              setData([...newData]);
            })});
  };

  return (
    <div className={styles.live} id="live">
      <h2 className={styles.live__table__title}>Live Information</h2>
      <div className={styles.live__container}>
        {data?.map((event, i) => (
          <LiveTable key={i} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Live;
