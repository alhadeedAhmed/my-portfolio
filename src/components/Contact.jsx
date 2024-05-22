import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o7639eg",
        "template_4uox37k",
        e.target,
        "oGzFvTYEaOWTTivir"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="contact-container">
      <div className="contact-info">
        <h2>Contact Me</h2>
        <p>
          Are you looking for a skilled web developer to turn your ideas into
          functional websites? Contact me to discuss your project.
        </p>
        <ul>
          <li>
            <FaMapMarkerAlt className="contact-icon" />
            <p>Bismillah Park Ravi Rayan Muridke, Lahore, Pakistan</p>
          </li>
          <li>
            <FaEnvelope className="contact-icon" />
            <p>hadeedsudheer22@gmail.com</p>
          </li>
          <li>
            <FaPhoneAlt className="contact-icon" />
            <p>+92 313 1441604</p>
          </li>
          <li>
            <FaPhoneAlt className="contact-icon" />
            <p>+92 302 9289828</p>
          </li>
        </ul>
      </div>
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <p>Feel free to drop me a line below!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Type Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
