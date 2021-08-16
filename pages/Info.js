import React from "react";
import img from "../public/images/live_pic2.jpg";
import "../styles/pages/Info.module.css";

function Info() {
  return (
    <div className="info">
      <figure>
        <h2>Live Information</h2>
        <img src={img} alt="avalanche-shiga" />
      </figure>
      <div className="info__table">
        <h3>ライブ予定↓</h3>
        <p>イベント名：後ほどお知らせします。</p>
        <p>日時：8月中旬</p>
        <p>場所：後ほどお知らせします。</p>
        <small>＊詳細は後ほど掲載いたします。</small>
      </div>
    </div>
  );
}

export default Info;
