import React from "react";
import styles from "../styles/pages/Contact.module.css";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <div className={styles.contact}>
        <h2>Contact</h2>
        <ContactForm />
        <div className={styles.contact__other__means}>
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
    </Layout>
  );
}

export default Contact;
