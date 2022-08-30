import React from 'react'
import styles from "../styles/components/Live.module.scss";

const LiveTable = ({event}) => {
  const dateArr = ["日", "月", "火", "水", "木", "金", "土"];

  const adjustDate = (date) => {
    const baseDate = new Date(date);
    const dayOfWeekNum = baseDate.getDay();
    const dayOfWeek = dateArr[dayOfWeekNum];

    const splitDate = date.split("-");
    const newDate = `${splitDate[0]}年 ${splitDate[1]}月 ${splitDate[2]}日(${dayOfWeek})`;

    return newDate;
  };

  return (
    <table className={styles.live__table}>
      <tbody>
        <tr className={styles.live__table__content}>
          <td className={styles.live__table__content__menu}>イベント名</td>
          <td className={event ? event.eventName && styles.live__table__content__animTitle : styles.loading}>{!event ? '' : event.eventName ?? "未定"}</td>
        </tr>
        <tr className={styles.live__table__content}>
          <td className={styles.live__table__content__menu}>日時</td>
          <td className={event ? '' : styles.loading}>{!event ? '' : event.date ? `${adjustDate(event.date)}` : "未定"}</td>
        </tr>
        <tr className={styles.live__table__content}>
          <td className={styles.live__table__content__menu}>出演時間</td>
          <td className={event ? '' : styles.loading}>{!event ? '' : event.time ? `${event.time}～` : "未定"}</td>
        </tr>
        <tr className={styles.live__table__content}>
          <td className={styles.live__table__content__menu}>場所</td>
          <td className={event ? '' : styles.loading}>{!event ? '' : event.place ?? "未定"}</td>
        </tr>
        <tr className={styles.live__table__content}>
          <td className={styles.live__table__content__menu}>詳細</td>
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
  )
}

export default LiveTable