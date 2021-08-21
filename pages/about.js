import React from "react";
import Image from "next/image";
import img from "../public/images/about_us.jpg";
import styles from "../styles/pages/About.module.css";
import Layout from "../components/Layout";
import Members from "../components/Members";

function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <figure>
          <Image src={img} />
        </figure>
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

        <Members />
      </div>
    </Layout>
  );
}

export default About;
