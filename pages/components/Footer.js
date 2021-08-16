import React from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import "./Footer.module.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <Link href="/">
          <h3>AVALANCHE</h3>
        </Link>
      </div>

      <div className="footer__links">
        <div className="footer__pages">
          <ul>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/information">Information</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/profile">
              <FaUserCircle />
            </Link>
          </ul>
        </div>

        <div className="footer__sns">
          <ul>
            <a target="_blank" href="https://twitter.com/avalanche_shiga">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/avalanche.official/?hl=ja"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCnhekCRthw7qGc0UywzCepw"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <small>© 2021 AVALANCHE</small>
      </div>
    </div>
  );
}

export default Footer;
