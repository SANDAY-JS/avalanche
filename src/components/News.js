import React from "react";
import { Link } from "react-router-dom";
import "./News.css";

function News() {
  return (
    <div className="news">
      <h2>~News~</h2>
      <div className="news__table">
        <h3>1.新着ライブ情報</h3>
        <p>
          詳しくは<Link to="/information">こちら</Link>
        </p>
        <h3>2.AVALANCHEアカウント、始動</h3>
        <p>
          詳しくは<Link to="/profile">こちら</Link>
        </p>
      </div>
    </div>
  );
}

export default News;
