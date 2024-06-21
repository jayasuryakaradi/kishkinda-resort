import React, { useState } from "react";
import "./Slidebar.css";
import card1 from "../../assets/attractions/queens_bath.jpg";
import card2 from "../../assets/attractions/tungabhadra_dam.jpg";
import card3 from "../../assets/attractions/vijaya_vittala.jpg";
import card4 from "../../assets/attractions/virupaksha_temple.jpg";
import card5 from "../../assets/attractions/yanthrodhara_hanuantha.jpg";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
const slides = [card1, card2, card3, card4, card5];

const Slidebar = () => {
  const showNextImage = () => {
    setImageIndex((index) => {
      if (index == slides.length - 1) return 0;
      return index + 1;
    });
  };
  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index == 0) return slides.length - 1;
      return index - 1;
    });
  };
  // setInterval(()=>{
  //   showNextImage()
  // },3000)
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="slidebar-container">
      <div className="slidebar-container__images-items"  >
        {slides.map((slide) => {
          return (
            <img
              src={slide}
              alt=""
              key={slide}
              className="slidebar-container__image"
              style={{ "translate": `${-100 * imageIndex}%` }}
            />
          );
        })}
        <button className="slidebar-container__slide-btn" style={{ left: "0" }} onClick={showPrevImage}>
          <MdArrowBackIos className="slide-btn"/>
        </button>
        <button
          className="slidebar-container__slide-btn"
          style={{ right: "0" }}
          onClick={showNextImage}
        >
          <MdArrowForwardIos className="slide-btn"/>
        </button>
      </div>
    </div>
  );
};

export default Slidebar;
