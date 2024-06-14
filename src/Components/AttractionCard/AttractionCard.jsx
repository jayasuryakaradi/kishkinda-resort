import React from "react";
import "./AttractionCard.css";
const AttractionCard = ({ image, title, timings, description }) => {
  return (
    <div className="attraction-card-container">
      <img src={image} alt="" />
      <div className="attraction-card-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <h5>{timings}</h5>
      </div>
    </div>
  );
};

export default AttractionCard;
