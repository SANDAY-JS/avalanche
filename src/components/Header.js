import React, { useEffect, useState } from "react";
import useLayoutEffect from "../assets/useIsomorphicLayoutEffect";
import Image from "next/image";
import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import { useAuth } from "../assets/StateProvider";
import { FaUserAlt } from "react-icons/fa";
import styles from "../styles/components/Header-sp.module.scss";

function Header({}) {
  const { currentUser, logout } = useAuth();
  // States
  const [error, setError] = useState("");
  const [menu, setMenu] = useState(false);
  const [scrollDir, setScrollDir] = useState("");
  const [isPageSmall, setIsPageSmall] = useState(true);

  // const router = useRouter();

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    console.log(scrollDir);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  useLayoutEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
  }, []);

  const checkWidth = () => {
    const match = window.matchMedia("(max-width: 767px)");
    if (match.matches) return setIsPageSmall(true);
    return setIsPageSmall(false);
  };

  return (
    <div
      className={`${styles.header} ${
        scrollDir === "down" ? styles.unvisible : ""
      }`}
    >
      <div className={styles.header__container}>
        {/* Left Section */}
        <div className={styles.header__container__logoAccount}>
          {/* ロゴ */}
          <div className={styles.header__container__logo}>
            <Link href="/" onClick={() => setMenu(false)}>
              <a>
                <Image
                  className={styles.logo}
                  src={"/images/logo.png"}
                  width="112"
                  height="40"
                />
              </a>
            </Link>
          </div>
          {/* Account Section */}
          <div className={styles.header__container__accountSection}>
            <Link href="/profile">
              <a>
                <FaUserAlt />{" "}
                <span>{currentUser ? currentUser.displayName : "ゲスト"}</span>
              </a>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <ul
          className={styles.header__container__links}
          onClick={() => setMenu(!menu)}
        >
          {isPageSmall ? (
            <>
              <div
                className={
                  menu
                    ? `${styles.header__container__menu} ${styles.active}`
                    : styles.header__container__menu
                }
              >
                {error && <p className="error">{error}</p>}
                <Link href="/">
                  <a>Home</a>
                </Link>
                <Link href="/#live">
                  <a>Live</a>
                </Link>
                <Link href="/#about">
                  <a>About Us</a>
                </Link>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
                {!currentUser && (
                  <>
                    <Link href="/login">
                      <a>Login</a>
                    </Link>
                    <Link href="/signup">
                      <a>Sign Up</a>
                    </Link>
                  </>
                )}

                {currentUser?.uid === process.env.NEXT_PUBLIC_ADMIN_UID && (
                  <Link href="/admin">
                    <a>Admin</a>
                  </Link>
                )}
              </div>
            </>
          ) : (
            // For PC
            <>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/#live">
                <a>Live</a>
              </Link>
              <Link href="/#about">
                <a>About</a>
              </Link>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
              {currentUser?.uid === process.env.NEXT_PUBLIC_ADMIN_UID && (
                <Link href="/admin">
                  <a className={styles.header__container__menu__admin}>
                    <AiFillEdit />
                  </a>
                </Link>
              )}
              <Link href="/profile">
                <a>
                  <FaUserAlt />{" "}
                  <span>
                    {currentUser ? currentUser.displayName : "ゲスト"}
                  </span>
                </a>
              </Link>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
