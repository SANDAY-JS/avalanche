import { useEffect, useLayoutEffect, useState } from "react";
import { TiCancel } from "react-icons/ti";
import { useAuth } from "../../assets/StateProvider";
import { db } from "../../../firebase";
import { useRouter } from "next/router";
import AdminLayout from "./assets/AdminLayout";

import styles from "../../styles/pages/admin/live.module.scss";

const adminLive = () => {
  const router = useRouter();
  const { updateInformationDraft, currentUser } = useAuth();

  const [securityCount, setSecurityCount] = useState(0);

  const [authority, setAuthority] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [data, setData] = useState("");

  const [eventname, setEventname] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [detail, setDetail] = useState("");

  const [draft, setDraft] = useState({
    eventName: eventname,
    date: date,
    time: time,
    place: place,
    detail: detail,
  });

  useEffect(() => {
    checkAuthority();
    fetchDraft();
  }, []);

  useLayoutEffect(() => {
    reflectData();
  }, [data]);

  useEffect(() => {
    console.log("securityCount", securityCount);
    checkSecurity();
  }, [securityCount]);

  useEffect(() => {
    return setDraft({
      eventName: eventname,
      date: date,
      time: time,
      place: place,
      detail: detail,
    });
  }, [eventname, date, time, place, detail]);

  const checkSecurity = () => {
    if (securityCount < 3) return;

    return router.push("/");
  };

  const checkAuthority = () => {
    if (!currentUser) return requirePassword();

    if (currentUser.uid === process.env.NEXT_PUBLIC_ADMIN_UID) {
      return setAuthority(true);
    }
  };

  const requirePassword = () => {
    setSecurityCount(securityCount + 1);

    const password = prompt("パスワードを入力して下さい");
    // cancel ボタン
    if (password === null) return router.push("/");

    // パスワードが違うとき
    if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD)
      return requirePassword();

    // pasword correct
    return setAuthority(true);
  };

  const fetchDraft = async () => {
    // firebaseからデータを取得
    const draftRef = db.collection("draft").doc("information");
    if (!draftRef) return;

    await draftRef.get().then((doc) => {
      if (!doc.exists) return;

      return setData(doc.data());
    });
  };

  const reflectData = () => {
    if (!data) return;

    setEventname(data.eventName ? data.eventName : "");
    setDate(data.date ? data.date : "");
    setTime(data.time ? data.time : "");
    setPlace(data.place ? data.place : "");
    setDetail(data.detail ? data.detail : "");
  };

  const resetForm = () => {
    const check = confirm("フォームの内容をすべてリセットしますか？");
    if (!check) return;

    setEventname("");
    setDate("");
    setTime("");
    setPlace("");
    setDetail("");
  };

  const submitDraft = async () => {
    const check = confirm("この内容でおけ？");
    if (!check) return;

    console.log(draft);

    try {
      await updateInformationDraft(draft);
      setError("");
      setSuccess("更新が完了しました");
    } catch (e) {
      console.error("下書きを保存できませんでした", e);
      setError(
        "エラーが生じました。(改善方法がわからないときは、サンチェスに知らせてください。)"
      );
    }
  };

  return (
    <AdminLayout>
      <div className={styles.adminLive}>
        {authority && (
          <>
            {/* <div className={styles.adminLive__logo}>
              <Link href="/">
                <a>
                  <Image
                    src="/images/logo.png"
                    className={styles.logo}
                    width="140"
                    height="50"
                  />
                </a>
              </Link>
            </div> */}

            {error && <p className={styles.adminLive__error}>{error}</p>}
            {success && <p className={styles.adminLive__success}>{success}</p>}

            <div className={styles.adminLive__contents}>
              <div className={styles.adminLive__contents__item}>
                <label htmlFor="eventName">イベント名</label>
                <input
                  value={eventname}
                  onChange={(e) => setEventname(e.target.value)}
                  id="eventName"
                  type="text"
                />
              </div>
              <div className={styles.adminLive__contents__item}>
                <label htmlFor="date">日時/出演時間</label>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  id="date"
                  type="date"
                />
                <div>
                  <input
                    className={styles.adminLive__contents__item__time}
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    id="time"
                    type="time"
                  />
                  <span onClick={() => setTime("")}>
                    <TiCancel />
                  </span>
                </div>
              </div>
              <div className={styles.adminLive__contents__item}>
                <label htmlFor="place">場所</label>
                <input
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  id="place"
                  type="text"
                />
              </div>
              <div className={styles.adminLive__contents__item}>
                <label htmlFor="detail">詳細</label>
                <textarea
                  className={styles.adminLive__contents__detail}
                  onChange={(e) => setDetail(e.target.value)}
                  value={detail}
                  id="detail"
                  cols="50"
                  rows="10"
                ></textarea>
              </div>
            </div>

            <button className={styles.adminLive__deleteAll} onClick={resetForm}>
              全て消去
            </button>
            <button className={styles.adminLive__submit} onClick={submitDraft}>
              更新
            </button>
          </>
        )}
      </div>
    </AdminLayout>
  );
};

export default adminLive;
