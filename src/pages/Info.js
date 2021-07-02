import React from "react";
import "./Info.css";
import img from "../images/live_pic2.jpg";

function Info() {
  return (
    <div className="info">
      <figure>
        <h2>Live Information</h2>
        <img src={img} alt="" />
      </figure>
      <div className="info__table">
        <h3>ライブ予定↓</h3>
        <p>イベント名：オーバー・ザ・コロナ in えきまちテラス</p>
        <p>日時：7月10日（土） 14:30~15:00</p>
        <p>場所：JR長浜駅前</p>
        <small>＊詳細は後ほど掲載いたします。</small>
      </div>
    </div>
  );
}

export default Info;
