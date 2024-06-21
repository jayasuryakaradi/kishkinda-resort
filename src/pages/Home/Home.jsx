import React from "react";
import "./Home.css";
import OurRooms from "../../Components/OurRooms/OurRooms";
import Attractions from "../../Components/Attractions/Attractions";
import ScrollToTop from "../../utils/functions";
import Announcement from "../../Components/Announcement/Announcement";
import Offers from "../../Components/Offers/Offers";
import Slidebar from "../../Components/Slidebar/Slidebar";
const Home = () => {
  ScrollToTop();
  return (
    <div>
      <div >
        <Slidebar/>
        <div className="ann-and-offer">
          <Announcement className="announcement"/>
          <Offers />
        </div>
        <OurRooms />
      </div>
      <Attractions />
    </div>
  );
};

export default Home;
