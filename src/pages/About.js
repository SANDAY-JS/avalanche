import React from "react";
import "./About.css";
import img from "../images/about_us.jpg";

function About() {
  return (
    <div className="about">
      <figure>
        <img src={img} />
      </figure>
      <h2>About Us</h2>
      <div className="about__band">
        <h3> AVALANCHE </h3>
        <div>
          <p>
            滋賀県出身、大学生４人組バンド
            <br />
            滋賀県彦根市のライブハウス"COCOZA"でのライブや"SAVE THE
            BIRTHDAY"などに出演。
          </p>
        </div>
      </div>

      <div className="about__member">
        <h3> MEMBERS </h3>
        <div>
          <p>
            Singer: <span>Shota</span>
          </p>
          <p>
            Guitar: <span>Tomoki</span>
          </p>
          <p>
            Base: <span>Yuto</span>
          </p>
          <p>
            Drums: <span>Sun</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
