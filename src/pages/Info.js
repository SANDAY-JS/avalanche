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
      <p>現在予定中のライブはありません。 </p>
    </div>
  );
}

export default Info;
