import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import logo from "../public/images/logo.png";
import styles from "../styles/components/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>
        <Link href="/">
          <a>
            <Image src={logo} className={styles.logo} />
          </a>
        </Link>
      </div>

      <div className={styles.footer__links}>
        <div className={styles.footer__pages}>
          <ul>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/information">
              <a>Information</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            <Link href="/profile">
              <a>
                <FaUserCircle />
              </a>
            </Link>
          </ul>
        </div>

        <div className={styles.footer__sns}>
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

      <div className={styles.footer__copyright}>
        <small>© 2021 AVALANCHE</small>
      </div>
    </div>
  );
}

export default Footer;
