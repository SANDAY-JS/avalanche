import React, { useLayoutEffect } from "react";
import { Slide } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
import styles from "../styles/components/Slider.module.css";
import img1 from "../../public/images/topband.JPG";
import img2 from "../../public/images/topband3.JPG";
import img3 from "../../public/images/band_blue.jpg";
import img4 from "../../public/images/band_green.jpg";

const slideImgs = [img1, img2, img3, img4];

function Slider() {
  const adjustStyles = () => {
    const btns = document.querySelectorAll(".nav.default-nav");
    btns.forEach((btn) => (btn.style.backgroundColor = "transparent"));
  };

  useLayoutEffect(() => {
    return adjustStyles();
  }, []);

  return (
    <div className={styles.slider}>
      <Slide easing="ease-in-out">
        {slideImgs.map((image, i) => (
          <figure key={i}>
            <Image src={image} key={i} />
          </figure>
        ))}
      </Slide>
    </div>
  );
}

export default Slider;
