import React from "react";
import "./ContactUs.css";
import ScrollToTop from "../../utils/functions";
import PageHeading from "../../Components/PageHeading/PageHeading";
import image1 from "../../assets/attractions/achutaraya_temple.jpg";
import ContactUsForm from "../../Components/ContactUsForm/ContactUsForm";
const ContactUs = () => {
  ScrollToTop();
  return (
    <div className="">
      <PageHeading title="CONTACT US" image={image1} />
      <div className="contact-us-container">
        <ContactUsForm />
        <div className="side-contact-us-container">
          <div className="side-contact-us-card">
            <h2>ADDRESS DETAILS</h2>
            Near Stone Bridge cross,
            <br /> ANEGUNDI - 583234,
            <br /> Across the River
            <br /> Hampi, Karnataka, India
          </div>
          <div className="side-contact-us-card">
            <h2>RECEPTION</h2>
            <strong>Phone:</strong> +918533200700, +918310256712
            <br /> <strong>Whatsapp:</strong> +919482810168
            <br />
            <strong>Email:</strong>
            kishkindaresort@gmail.com
          </div>
          <div className="side-contact-us-card">
            <h2>RESERVATION</h2>
            <strong>Off. Phone:</strong> +918533200708
            <br /> <strong>General Manager:</strong> +918217687224,
            +919449544168
            <br />
            <strong>Email:</strong> sales.kishkindaresort@gmail.com
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30779.105931253584!2d76.443134!3d15.355446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77fdadf83b537%3A0x313c8c8110022f0!2sKishkinda%20Heritage%20Resort%20-%20Near%20Anjanadri%20Hill%2C%20Hampi%2C%20Karnataka!5e0!3m2!1sen!2sus!4v1718344815251!5m2!1sen!2sus"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="map"
      ></iframe>
    </div>
  );
};

export default ContactUs;
