import React from "react";
import "./OurRooms.css";
import card1 from "../../assets/rooms/slide1.jpg";
import card2 from "../../assets/rooms/slide2.jpg";
import card3 from "../../assets/rooms/slide3.jpg";
import card4 from "../../assets/rooms/slide4.jpg";
import OurRoomsCard from "../OurRoomsCard/OurRoomsCard";
const OurRooms = () => {
  const cardData = [
    {
      title: "Non AC Cottage",
      imageUrl: card1,
      navigate: "non-ac-cottage",
    },
    {
      title: "AC Cottage",
      imageUrl: card2,
      navigate: "ac-cottage",
    },
    {
      title: "AC Suite Room",
      imageUrl: card3,
      navigate: "ac-suite-room",
    },
    {
      title: "AC Executive Room",
      imageUrl: card4,
      navigate: "ac-executive-room",
    },
  ];
  return (
    <div className="our-rooms-container">
      <h1>OUR ROOMS</h1>
      <div className="our-rooms-cards-container">
        {cardData.map((eachData) => {
          return (
            <OurRoomsCard
              key={eachData.navigate}
              imageUrl={eachData.imageUrl}
              navigate={eachData.navigate}
              title={eachData.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurRooms;
