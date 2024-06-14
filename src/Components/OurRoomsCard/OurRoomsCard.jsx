import React from "react";
import "./OurRoomsCard.css";
import { Link } from "react-router-dom";

const OurRoomsCard = ({ title, imageUrl, navigate }) => {
  return (
    <div className="our-room-card-container">
      <img src={imageUrl} alt={navigate} />
      <div className="our-room-details">
        <p>{title}</p>
        <Link to={navigate} className="link-decoration">More Details</Link>
      </div>
    </div>
  );
};

export default OurRoomsCard;
