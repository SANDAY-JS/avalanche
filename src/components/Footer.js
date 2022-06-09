import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/Footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo}>
        <Link href="/">
          <a>
            <Image
              src="/images/logo.png"
              width={"300"}
              height={"111"}
              className={styles.logo}
            />
          </a>
        </Link>
      </div>

      <div className={styles.footer__bottom}>
        <div className={styles.footer__copyright}>
          <p>© 2022 AVALANCHE</p>
        </div>

        <div className={styles.footer__sns}>
          <ul>
            <a target="_blank" href="https://twitter.com/avalanche_shiga">
              <i className="fab fa-twitter" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/avalanche.official/?hl=ja"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCnhekCRthw7qGc0UywzCepw"
            >
              <i className="fab fa-youtube" />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
