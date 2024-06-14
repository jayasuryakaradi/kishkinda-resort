import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { RiMenu4Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <div className="nav-left">
        <img src={logo} alt="logo" />
      </div>
      <ul className={`nav-right ${toggleMenu ? "" : "hide-menu"}`}>
        <NavLink
          to="home"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
        >
          <li>HOME</li>
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
        >
          <li>ABOUT THE RESORT</li>
        </NavLink>
        <NavLink
          to="gallery"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
        >
          <li>GALLERY</li>
        </NavLink>
        <NavLink
          to="rooms"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
        >
          <li>ROOMS</li>
        </NavLink>
        <NavLink
          to="facilities"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
        >
          <li>FACILITIES</li>
        </NavLink>
        <NavLink
          to="contact-us"
          className={({ isActive }) => `link ${isActive ? "active" : ""}`}
        >
          <li>CONTACT US</li>
        </NavLink>
      </ul>
      <RiMenu4Fill
        className="menu-icon"
        onClick={() => setToggleMenu(!toggleMenu)}
      />
    </nav>
  );
};

export default Navbar;
