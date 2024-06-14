import PageHeading from "../../Components/PageHeading/PageHeading";
import React from "react";
import "./Facilities.css";
import image1 from '../../assets/rooms/slide3.jpg'
import { FaTruckMedical } from "react-icons/fa6";
import { MdDining } from "react-icons/md";
import { MdPool } from "react-icons/md";
import { MdCake } from "react-icons/md";
import { MdOutlineLocalBar } from "react-icons/md";
import { FaBusAlt } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { FaCoffee } from "react-icons/fa";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { FaConciergeBell } from "react-icons/fa";
import { MdModeOfTravel } from "react-icons/md";
import { FaParking } from "react-icons/fa";
import { TbSmokingNo } from "react-icons/tb";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { FaSwimmingPool } from "react-icons/fa";
import { RiRestaurantFill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { PiTelevisionBold } from "react-icons/pi";
import { MdCurrencyExchange } from "react-icons/md";
import ScrollToTop from "../../utils/functions";
const Facilities = () => {
  ScrollToTop()
  const facilities = [
    {
      title: "Medical",
      icon: <FaTruckMedical />,
    },
    {
      title: "Fine Dining",
      icon: <MdDining />,
    },
    {
      title: "Swimming Pool",
      icon: <MdPool />,
    },
    {
      title: "Banquet",
      icon: <MdCake />,
    },
    {
      title: "Bar",
      icon: <MdOutlineLocalBar />,
    },
    {
      title: "Bus Parking",
      icon: <FaBusAlt />,
    },
    {
      title: "Business Center",
      icon: <MdBusinessCenter />,
    },

    {
      title: "Coffee Shop",
      icon: <FaCoffee />,
    },

    {
      title: "Laundry",
      icon: <MdOutlineLocalLaundryService />,
    },

    {
      title: "Concierge",
      icon: <FaConciergeBell />,
    },
    {
      title: "Travel Desk",
      icon: <MdModeOfTravel />,
    },
    {
      title: "Free Parking",
      icon: <FaParking />,
    },
    {
      title: "Non Smoking",
      icon: <TbSmokingNo />,
    },
    {
      title: "Check-Out",
      icon: <FaHouseCircleCheck />,
    },
    {
      title: "Outdoor Pool",
      icon: <FaSwimmingPool />,
    },

    {
      title: "Restaurant",
      icon: <RiRestaurantFill />,
    },
    {
      title: "Room Service",
      icon: <RiCustomerService2Fill />,
    },
    {
      title: "Satellite TV",
      icon: <PiTelevisionBold />,
    },
    {
      title: "Currency Exchange",
      icon: <MdCurrencyExchange />,
    },
  ];
  return (
    <div>
      <PageHeading title={"FACILITIES"} image={image1}/>
      <div className="facilities-container">
        {facilities.map((eachData) => {
          return (
            <div key={eachData.title} className="facilities-card">
              <span className="facilities-icon">{eachData.icon}</span>
              <span className="facilities-title">{eachData.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilities;
