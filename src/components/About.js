import Image from "next/image";
import img from "../../public/images/aboutus.webp";
import styles from "../styles/components/About.module.scss";
import Members from "./Members";

function About({}) {
  return (
    <div className={styles.about} id="about">
      <div className={styles.about__container}>
        <figure>
          <Image
            src={img}
            // src="/images/about_us.jpg"
            // layout="responsive"
            // width="600"
            // height="300"
          />
        </figure>
        <div className={styles.about__band}>
          <h3>AVALANCHE</h3>
          <div>
            <p>
              滋賀県出身、大学生４人組バンド
              <br />
              大阪・京都など、関西のライブハウスを中心に活動中
            </p>
          </div>
        </div>

        <Members />
      </div>
    </div>
  );
}

export default About;
