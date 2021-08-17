import React from "react";
import Image from "next/image";
import img from "../public/images/about_us.jpg";
import styles from "../styles/pages/About.module.css";
import Layout from "./components/Layout";

function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <figure>
          <Image src={img} />
        </figure>
        <h2>About Us</h2>
        <div className={styles.about__band}>
          <h3>AVALANCHE</h3>
          <div>
            <p>
              滋賀県出身、大学生４人組バンド
              <br />
              滋賀県彦根市のライブハウス"COCOZA"でのライブや"SAVE THE
              BIRTHDAY"などに出演。
            </p>
          </div>
        </div>

        <div className={styles.about__member}>
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
    </Layout>
  );
}

export default About;
