import React, { useEffect, useState } from "react";
import "./Offers.css";
import axios from "axios";
const Offers = () => {
  const [dataRes, setDataRes] = useState([]);
  const fetchData = async () => {
    const response = await axios("http://localhost:3000/offers").catch(
      (error) => console.log(error)
    );
    setDataRes(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="offer-container">
      <h1>OFFERS</h1>
      <div className="offer-details-container">
        {dataRes.map((eachData) => {
          return (
            <div key={eachData.id}>
              <h4>{eachData.title}</h4>
              <span>{eachData.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
