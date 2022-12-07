import React, { useState } from 'react'
import { TiCancel } from "react-icons/ti";
import { useAuth } from '../../../assets/StateProvider';
import styles from "../../../styles/pages/admin/live.module.scss";
import BackButton from '../BackButton';

const NewEventTable = (): JSX.Element => {
  const { addOrUpdateEvent } = useAuth();

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const [eventname, setEventname] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [comment, setComment] = useState<string>("");

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

    const newEvent = {
      eventName: eventname,
      date: date,
      time: time,
      place: place,
      detail: detail,
      comment: comment,
    }

    try {
      await addOrUpdateEvent(newEvent);
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
    <div className={styles.adminLive__newEvent}>
        <h4 style={{position: 'relative', width: '100%', textAlign: 'center'}}><BackButton /> ライブ情報を追加</h4>
        {error && <p className={styles.adminLive__error}>{error}</p>}
        {success && <p className={styles.adminLive__success}>{success}</p>}

        <div className={styles.adminLive__contents}>
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
            <label htmlFor="detail">詳細</label>
            <textarea
                className={styles.adminLive__contents__detail}
                onChange={(e) => setDetail(e.target.value)}
                value={detail}
                id="detail"
                cols={50}
                rows={10}
            ></textarea>
            </div>
            <div className={styles.adminLive__contents__item}>
            <label htmlFor="comment">コメント</label>
            <textarea
                className={styles.adminLive__contents__detail}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                id="comment"
                cols={50}
                rows={10}
            ></textarea>
            </div>
        </div>

        <div className={styles.adminLive__buttons}>
            <button className={styles.adminLive__deleteAll} onClick={resetForm}>
                全て消去
            </button>
            <button className={styles.adminLive__submit} onClick={submitDraft}>
                更新
            </button>
        </div>
    </div>
  )
}

export default NewEventTable