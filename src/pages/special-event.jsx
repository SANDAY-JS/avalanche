import gsap, { Power2 } from "gsap";
import { useLayoutEffect, useState, useRef } from "react";
import styles from "../styles/pages/special-event.module.scss";
import layoutStyles from "../styles/components/Layout.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

const specialEvent = () => {
  const imgSrc = "/images/special-event.webp";
  const tl = gsap.timeline({});
  const bgRef = useRef();
  const firstVisibleRef = useRef([]);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    tl.addLabel("anim")
      .to(bgRef.current, 1, { opacity: 1, ease: Power2.easeInOut }, "anim+=1")
      .fromTo(
        bgRef.current,
        1,
        { filter: "brightness(1)" },
        { filter: "brightness(.5)" },
        "anim+=3"
      )
      .to(
        firstVisibleRef.current,
        1,
        { opacity: 1, ease: Power2.easeInOut },
        "anim+=4"
      )
      .fromTo(
        ".fadeIn > p",
        1,
        { opacity: 0, y: 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.4, ease: Power2.easeInOut },
        "anim+=4.4"
      )
      .to(bgRef.current, 1, { ease: Power2.easeInOut }, "anim+=2");
  }, []);
  return (
    <>
      <div
        ref={(el) => (firstVisibleRef.current[0] = el)}
        className={styles.animationWrapper}
      >
        <Header />
      </div>
      <div className={`${layoutStyles.container} ${styles.layoutContainer}`}>
        <div className={`${styles.container}`}>
          {/* BG */}
          <div ref={bgRef} className={styles.container__bg} />

          {/* Page Contents */}
          <div
            ref={(el) => (firstVisibleRef.current[1] = el)}
            className={styles.container__contents}
          >
            <h3
              ref={(el) => (firstVisibleRef.current[2] = el)}
              className={styles.container__contents__title}
            >
              北近江FREAKY JAMiN'2022 AVALANCHE出演決定!!
            </h3>
            <div
              className={`fadeIn ${styles.container__contents__description}`}
            >
              <p>2022/4/17(Sun)</p>
              <p>at 滋賀県立文化産業交流会館</p>
              <p>賎ヶ岳ステージ</p>
              <p>前売り券：¥4,000~ (高校生以下¥1,000~)</p>
              <p>
                前売り券は
                <a href="https://kfj-shiga.jp/ticket" target={"_blank"}>
                  こちら
                </a>
              </p>
              <p>
                その他詳細は
                <a href="https://kfj-shiga.jp/" target={"_blank"}>
                  こちら
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default specialEvent;
