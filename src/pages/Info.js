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
        <p>日時：7月10日(日)</p>
        <p>場所：イオンモール近江八幡</p>
        <small>＊詳細は後ほど掲載いたします。</small>
      </div>
    </div>
  );
}

export default Info;
