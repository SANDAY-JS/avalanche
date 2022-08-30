import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { TiCancel, TiEdit } from 'react-icons/ti';
import { useAuth } from '../../../assets/StateProvider';
import styles from '../../../styles/pages/admin/live.module.scss';

const EditTable = ({event}) => {
  const { addOrUpdateEvent, deleteEvent } = useAuth();
  const router = useRouter()

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [eventName, setEventName] = useState(event?.eventName ?? "");
  const [date, setDate] = useState(event?.date ?? "");
  const [time, setTime] = useState(event?.time ?? "");
  const [place, setPlace] = useState(event?.place ?? "");
  const [detail, setDetail] = useState(event?.detail ?? "");

  const handleDeleteEvent = async () => {
    const check = confirm('このライブ情報を削除しますか？')
    if(!check) return;

    setSuccess('')
    setError('')
    try {
      await deleteEvent(event)
      setSuccess('イベントを削除しました')
      router.push('/admin/live')
    } catch (error) {
      console.error(error);
      setError('削除に失敗しました。')
    }
  }

  const resetForm = () => {
    const check = confirm("フォームの内容をすべてリセットしますか？");
    if (!check) return;

    setEventName("");
    setDate("");
    setTime("");
    setPlace("");
    setDetail("");
  };

  const submitDraft = async () => {
    const check = confirm("この内容でおけ？");
    if (!check) return;

    const newEvent = {
      eventName: eventName,
      date: date,
      time: time,
      place: place,
      detail: detail,
    }

    const isDateSame = date === event.date;

    try {
      isDateSame ? 
      await addOrUpdateEvent(newEvent) :
      await addOrUpdateEvent(newEvent, event.date);

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
        <h4><TiEdit />{' '}編集</h4>
        {error && <p className={styles.adminLive__error}>{error}</p>}
        {success && <p className={styles.adminLive__success}>{success}</p>}

        <div className={styles.adminLive__contents}>
            <div className={styles.adminLive__contents__item}>
            <label htmlFor="eventName">イベント名</label>
            <input
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
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
                cols={50}
                rows={10}
            ></textarea>
            </div>
        </div>

        <div className={styles.adminLive__buttons}>
            <button style={{fontSize: '1.25rem', background: 'red', color: 'white', border: 'none'}} className={styles.adminLive__deleteAll} onClick={handleDeleteEvent}>
                イベントを削除
            </button>
            <button style={{fontSize: '1.25rem'}} className={styles.adminLive__deleteAll} onClick={resetForm}>
                全てリセット
            </button>
            <button style={{fontSize: '1.25rem'}} className={styles.adminLive__submit} onClick={submitDraft}>
                更新
            </button>
        </div>
    </div>
  )
}

export default EditTable