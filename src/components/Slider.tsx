import React, { useEffect } from "react";
import { Fade } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
import styles from "../styles/components/Slider.module.css";
import img1 from "../../public/images/topband.jpg";
import img2 from "../../public/images/topband3.jpg";
import img3 from "../../public/images/band_blue.jpg";
import img4 from "../../public/images/band_green.jpg";

const slideImgs = [img1, img2, img3, img4];

const Slider = (): JSX.Element => {
  const adjustStyles = () => {
    const btns = document.querySelectorAll(".nav.default-nav");
    btns.forEach((btn: any) => (btn.style.backgroundColor = "transparent"));
  };

  useEffect(() => {
    adjustStyles();
  }, []);

  return (
    <div className={styles.slider}>
      <Fade easing="ease-in-out">
        {slideImgs.map((image, i) => (
          <figure key={i}>
            <Image src={image} key={i} priority alt={"AVALANCHE Live 画像"} />
          </figure>
        ))}
      </Fade>
    </div>
  );
}

export default Slider;
