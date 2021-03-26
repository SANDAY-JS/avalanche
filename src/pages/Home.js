import React from "react";
import News from "../components/News";
import Slider from "../components/Slider";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Slider />
      <News />
    </div>
  );
}

export default Home;
