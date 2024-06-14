import React from "react";
import "./ContactUsForm.css";
const ContactUsForm = () => {
  return (
    <form className="contact-us-form-container">
      <h2>GET IN TOUCH WITH US</h2>
      <input type="text" placeholder="Your Name"/>
      <input type="email" placeholder="Your Email"/>
      <input type="tel" placeholder="Your Phone Number"/>
      <input type="text" placeholder="Subject"/>
      <textarea name="" id="" placeholder="Your Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUsForm;
