import React from "react";
import News from "./components/News";
import Slider from "./components/Slider";
import "../styles/pages/TopPage.module.css";

function TopPage() {
  return (
    <div className="top-page">
      <Slider />
      <News />
    </div>
  );
}

export default TopPage;
