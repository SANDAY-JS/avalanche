import React from "react";
import styles from "../styles/pages/Contact.module.scss";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <ContactForm />
      <div className={styles.contact__other__means}>
        <h4>こちらからもご連絡いただけます。</h4>
        <div>
          <a target="_blank" href="https://twitter.com/avalanche_shiga">
            <i className="fab fa-twitter" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/avalanche.official/?hl=ja"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
