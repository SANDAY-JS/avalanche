import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slider.module.css";
import img1 from "../../public/images/live_pic1.jpg";
import img2 from "../../public/images/live_pic2.jpg";
import img3 from "../../public/images/live_pic3.jpg";

const slideImgs = [img1, img2, img3];

function Slider() {
  return (
    <div className="slider">
      <Slide easing="ease-in-out">
        {slideImgs.map((img, i) => (
          <figure className="each-slide" key={i}>
            <img src={img} />
          </figure>
        ))}
      </Slide>
    </div>
  );
}

export default Slider;
