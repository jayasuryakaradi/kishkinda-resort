import React from "react";
import "./Footer.css";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
// Social Media Icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="contact-us">
          <h3>CONTACT US</h3>
          <span>
            <MdEmail /> &nbsp; sales.kishkindaresort@gmail.com
          </span>
          <span>
            <FaPhone />
            &nbsp; +91 85332 00700
          </span>
          <span>
            <FaLocationDot />
            &nbsp; Near Stone Bridge Cross, Anegundi, Hampi
          </span>
        </div>
        <div className="navigation">
          <h3>NAVIGATION</h3>
          <Link className="link">Home</Link>
          <Link className="link">Gallery</Link>
          <Link className="link">Rooms</Link>
          <Link className="link">Facilities</Link>
          <Link className="link">Contact us</Link>
          <Link className="link">About us</Link>
        </div>
        <div className="policies">
          <h3>POLICIES</h3>
          <Link className="link">Privacy Policy</Link>
          <Link className="link">Cancellation Policy</Link>
          <Link className="link">General hotel Policy</Link>
        </div>
        <div className="social-media">
          <h3>SOCIAL MEDIA</h3>
          <span>
            <a href="" className="link">
              <FaFacebookSquare />
            </a>
            <a href="" className="link">
              <FaInstagram />
            </a>
            <a href="" className="link">
              <FaSquareXTwitter />
            </a>
            <a href="" className="link">
              <MdEmail />
            </a>
          </span>
        </div>
      </div>
      <div className="copy-right">
        Copyright © 2024 www.kishkindaheritage.com All Rights Reserved. |
        Designed & Developed Jayasurya Karadi
      </div>
    </div>
  );
};

export default Footer;
