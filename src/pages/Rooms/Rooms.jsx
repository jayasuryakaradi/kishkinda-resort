import React from "react";
import "./Rooms.css";
import OurRooms from "../../Components/OurRooms/OurRooms";
import PageHeading from "../../Components/PageHeading/PageHeading";
import image1 from '../../assets/rooms/slide5.jpg'
import ScrollToTop from "../../utils/functions";
const Rooms = () => {
  ScrollToTop();
  return (
    <div >
      <PageHeading title={"OUR ROOMS"} image={image1}/>

      <OurRooms />
    </div>
  );
};

export default Rooms;
