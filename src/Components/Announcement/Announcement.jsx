import React, { useEffect, useState } from "react";
import "./Announcement.css";
import axios from "axios";
const Announcement = () => {
  const [dataRes, setDataRes] = useState([]);
  const fetchData = async () => {
    const response = await axios("http://localhost:3000/announcement").catch(
      (error) => console.log(error)
    );
    setDataRes(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="announcement-container">
      <h1>ANNOUNCEMENT</h1>
      <div className="announcement-details-container">
      {dataRes.map((eachData) => {
        return (
          <div key={eachData.id} className="announcement-details">
            <h4>{eachData.title}</h4>
            <span>{eachData.description}</span>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Announcement;
