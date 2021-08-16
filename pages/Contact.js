import React from "react";
import ContactForm from "./components/ContactForm";
import "../styles/pages/Contact.module.css";

function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <ContactForm />
      <div className="contact__other__means">
        <h4>こちらからもご連絡いただけます。</h4>
        <div>
          <a target="_blank" href="https://twitter.com/avalanche_shiga">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/avalanche.official/?hl=ja"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
