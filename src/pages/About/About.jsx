import React from "react";
import "./About.css";
import image from "../../assets/rooms/slide1.jpg";
import image1 from "../../assets/rooms/slide4.jpg";
import image2 from "../../assets/rooms/slide5.jpg";
import ScrollToTop from "../../utils/functions";
import PageHeading from "../../Components/PageHeading/PageHeading";
const About = () => {
  ScrollToTop();
  const bottomDetails = [
    {
      title: "Conference Hall",
      description:
        "The Resort having a 175- and 75-member sitting capacity with projector and all conference facilities.",
    },
    {
      title: "Restaurant",
      description:
        "Vegetarian Restaurant with Multi cuisine, hygienic preparation, homemade food, good service, Non-vegetarian restaurant and Bar.",
    },
    {
      title: "Travel Desk",
      description: "Car rental service for Transfers and Sightseeing.",
    },
    {
      title: "Other Facilities",
      description:
        "Wi-Fi, uninterrupted power supply, heavy vehicle parking ACTIVITIES: Swimming, Cricket, volleyball, badminton, trekking",
    },
  ];
  return (
    <>
      <div className="about-container">
        <PageHeading image={image} title={"ABOUT THE RESORT"} />

        <div className="title-with-description">
          <h2>Welcome to Kishkinda Heritage Resort</h2>
          <p>
            KISHKINDA HERITAGE RESORT a Holiday Resort and Water park near
            Anjanadri Hill, ANEGUNDI and close to HAMPI, Karnataka and it is
            just 20 kms away UNESCO World Heritage sites " HAMPI " Resort
            established in 1999 and later slowly expanded as Holiday Resort with
            Water Park with all modern amenities and services.
          </p>
          <p>
            The Resort spread over 6 acres surrounded beautiful hills, the
            spreaded 2 Kms Lake behind, the water flows down on rocks, the
            cascades, pools, canals, splendour natural beauty, on the other side
            at front the spreaded green paddy fields, the rich as it is in
            splendid scenery and water flowing attracts tourist to
            unforgettable.
          </p>
          <p>
            Kishkinda Heritage Resort offers with the luxurious Suites, Village
            Ethnic Cottages, along with Water Park allows an escape from the
            hustle and bustle of everybody life, Children Park, water sliding,
            playground, the multi cuisine Restaurant offers a delicious Indian
            food, the well-arranged conference hall for business meeting,
            Banquet Hall, the green park for wedding, birthday function and
            family gatherings.
          </p>
        </div>
        <div className="about-details-section">
          <div>
            <h2>Resort Amenities</h2>
            <p>
              SUITES & COTTAGES: Resort having 4 Luxurious AC Deluxe Suite Room,
              (Building) 12 Ac & 13 NON-AC individual cottages with
              well-equipped furniture, CTV, Telephone, attached bathroom with
              Hot & cold Water. There are Mountain View cottages, Garden view
              cottage, Pool view cottage.
            </p>
          </div>
          <img src={image1} alt="" />
        </div>
        <div
          className="about-details-section"
          style={{
            backgroundImage:
              "linear-gradient(270deg, rgb(223, 222, 222), white)",
          }}
        >
          <img src={image2} alt="" style={{ borderRadius: "50% 0 0 50%" }} />
          <div>
            <h2>Water Park</h2>
            <p>
              The Tourist / traveller will prefer to have a comfortable holiday
              with their children when visit to new places. Kishkinda Water Park
              is a suitable and perfect place for spending holiday trip with
              family and children. And the best place for school and college
              students for having picnic or day out. Water Park having Sliding,
              Swimming pools, cascade, Children Park, playground. There are some
              day out package for corporate, groups, school and college
              students.
            </p>
          </div>
        </div>
        <div className="bottom-details-container">
          {bottomDetails.map((eachData) => {
            return (
              <div className="bottom-details-card">
                <h2>{eachData.title}</h2>
                <p>{eachData.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
