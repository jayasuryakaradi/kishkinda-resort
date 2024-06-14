import React, { useEffect } from "react";
import { useRef } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { attractionData } from "../AttractionCard/attractionData";
import AttractionCard from "../AttractionCard/AttractionCard";
import "./Attractions.css";
const Attractions = () => {
  const slider = useRef();
  let screenWidth = window.innerWidth;
  let maxTranslate = 0;
  console.log(screenWidth);
  if (screenWidth > 1200) {
    maxTranslate = -250;
  } else if (screenWidth < 1200 && screenWidth > 800) {
    maxTranslate = -500;
  } else if (screenWidth < 400) {
    maxTranslate = -1200;
  } else if (screenWidth < 800 && screenWidth > 400) {
    maxTranslate = -550;
  }
  let tx = 0;
  const slideForward = () => {
    clearInterval(interval);
    if (tx > maxTranslate) {
      tx -= 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    clearInterval(interval);

    if (tx < 0) {
      tx += 50;
    }
    console.log(tx);

    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const interval = setInterval(() => {
    if (tx <= maxTranslate) {
      tx = 0;
    }
    if (tx > maxTranslate) {
      tx -= 50;
    }

    slider.current.style.transform = `translateX(${tx}%)`;
  }, 2000);
  return (
    <div className="attraction-container">
      <div className="title-container">
        <span className="btn">
          <MdArrowBackIos onClick={slideBackward} />
        </span>
        <h2>ATTRACTION POINTS IN HAMPI</h2>
        <span className="btn">
          <MdArrowForwardIos onClick={slideForward} />
        </span>
      </div>
      <div className="attraction-list-container" ref={slider}>
        {attractionData.map((eachData, index) => {
          return (
            <AttractionCard
              key={index}
              timings={eachData.timing}
              title={eachData.title}
              image={eachData.image}
              description={eachData.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Attractions;
