import React from "react";
import { Link } from "react-router-dom";
import "./News.css";

function News() {
  return (
    <div className="news">
      <h2>~News~</h2>
      <div className="news__container">
        <div className="news__container__block">
          <Link className="news__container__block__link" to="/information">
            新着ライブ情報
          </Link>
        </div>

        <div className="news__container__block">
          <Link className="news__container__block__link" to="/profile">
            AVALANCHEアカウント、始動
          </Link>
        </div>
      </div>
    </div>
  );
}

export default News;
