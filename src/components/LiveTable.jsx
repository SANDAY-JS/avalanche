import React, { useState } from 'react'
import styles from "../styles/components/Live.module.scss";

const isInThePast = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date < today;
}

const LiveTable = ({event}) => {
  const dateArr = ["日", "月", "火", "水", "木", "金", "土"];
  const [hasFinished, setHasFinished] = useState(isInThePast(new Date(event?.date)) ?? false)

  const adjustDate = (date) => {
    const baseDate = new Date(date);
    const dayOfWeekNum = baseDate.getDay();
    const dayOfWeek = dateArr[dayOfWeekNum];

    const splitDate = date.split("-");
    const newDate = `${splitDate[0]}年 ${splitDate[1]}月 ${splitDate[2]}日(${dayOfWeek})`;

    return newDate;
  };

  return (
    <>
      <div className={styles.live__table__content}>
          {!hasFinished &&
            event?.comment && 
              <div className={`${styles.live__comment} ${styles.waiting}`}>
                {event.comment.split('<br>').map((str,i) => <span key={i}>{str}</span>)}
              </div>
          }
      </div>
      <table className={`${styles.live__table} ${hasFinished && styles.done}`}>
          {hasFinished &&
            event?.comment && 
              <div className={styles.live__comment}>
                {event.comment.split('<br>').map((str,i) => <span key={i}>{str}</span>)}
              </div>
          }
        <tbody>
          <tr className={styles.live__table__content}>
            <td className={styles.live__table__content__menu}>場所</td>
            <td className={event ? '' : styles.loading}>{!event ? '' : event.place ?? "未定"}</td>
          </tr>
          <tr className={styles.live__table__content}>
            <td className={styles.live__table__content__menu}>日時</td>
            <td className={event ? '' : styles.loading}>
              {!event ? '' : event.date ? `${adjustDate(event.date)}` : "未定"}&nbsp;	&nbsp;
              {!event ? '' : event.time ? `${event.time}～` : ""}
            </td>
          </tr>
          <tr className={styles.live__table__content}>
            <td className={styles.live__table__content__menu}>料金・詳細</td>
            {!event ? (
              <td className={styles.loading}></td>
            ) : (
              <td>
                {event.detail ? (
                  event.detail.split('<br>').map((str,i) => <span key={i}>{str}</span>)
                ) : ''}
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default LiveTable