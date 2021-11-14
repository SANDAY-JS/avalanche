import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TiCancel } from "react-icons/ti";
import logo from "../../../public/images/logo.png";
import { useAuth } from "../../assets/StateProvider";
import styles from "../../styles/pages/admin/information.module.scss";

const adminInformation = () => {
  const { updateInformationDraft, currentUser } = useAuth();

  const [authority, setAuthority] = useState(false);
  const [error, setError] = useState("");
  // get from firebase realtime database eventually
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
  }, []);

  useEffect(() => {
    return setDraft({
      eventName: eventname,
      date: date,
      time: time,
      place: place,
      detail: detail,
    });
  }, [eventname, date, time, place, detail]);

  const checkAuthority = () => {
    if (!currentUser) return requirePassword();

    if (currentUser.uid === process.env.NEXT_PUBLIC_ADMIN_UID) {
      return setAuthority(true);
    }
  };

  const requirePassword = () => {
    const password = prompt("パスワードを入力して下さい");
    if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD)
      return requirePassword();
    return setAuthority(true);
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
    console.log(draft);

    try {
      await updateInformationDraft(draft);
      setError("");
    } catch (e) {
      console.error("下書きを保存できませんでした", e);
      setError(
        "エラーが生じました。(改善方法がわからないときは、サンチェスに知らせてください。)"
      );
    }
  };

  return (
    <div className={styles.adminInformation}>
      {authority && (
        <>
          <div className={styles.adminInformation__logo}>
            <Link href="/">
              <a>
                <Image
                  src={logo}
                  className={styles.logo}
                  width="200"
                  height="80"
                  layout="intrinsic"
                />
              </a>
            </Link>
          </div>

          {error && <p className={styles.adminInformation__error}>{error}</p>}

          <div className={styles.adminInformation__contents}>
            <div className={styles.adminInformation__contents__item}>
              <label htmlFor="eventName">イベント名</label>
              <input
                value={eventname}
                onChange={(e) => setEventname(e.target.value)}
                id="eventName"
                type="text"
              />
            </div>
            <div className={styles.adminInformation__contents__item}>
              <label htmlFor="date">日時/出演時間</label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                id="date"
                type="date"
              />
              <div>
                <input
                  className={styles.adminInformation__contents__item__time}
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  id="time"
                  type="time"
                />
                <a onClick={() => setTime("")}>
                  <TiCancel />
                </a>
              </div>
            </div>
            <div className={styles.adminInformation__contents__item}>
              <label htmlFor="place">場所</label>
              <input
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                id="place"
                type="text"
              />
            </div>
            <div className={styles.adminInformation__contents__item}>
              <label htmlFor="detail">詳細</label>
              <textarea
                className={styles.adminInformation__contents__detail}
                onChange={(e) => setDetail(e.target.value)}
                value={detail}
                id="detail"
                cols="50"
                rows="10"
              ></textarea>
            </div>
          </div>

          <button
            className={styles.adminInformation__deleteAll}
            onClick={resetForm}
          >
            全て消去
          </button>
          <button
            className={styles.adminInformation__submit}
            onClick={submitDraft}
          >
            更新
          </button>
        </>
      )}
    </div>
  );
};

export default adminInformation;
