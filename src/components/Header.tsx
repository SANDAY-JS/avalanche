import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../assets/StateProvider";
import { FaUserAlt } from "react-icons/fa";
import { RiEditLine } from "react-icons/ri";
import styles from "../styles/components/Header.module.scss";

const Header = (): JSX.Element => {
  const { currentUser, cookies } = useAuth();
  const hasUser = currentUser || cookies?.User;
  // States
  const [error, setError] = useState<string>("");
  const [scrollDir, setScrollDir] = useState<string>("");
  const [isPageSmall, setIsPageSmall] = useState<boolean>(true);

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
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  useEffect(() => {
    // console.log(cookies);
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
            <Link href="/">
              <Image
                className={styles.logo}
                src={"/images/logo.png"}
                width={isPageSmall ? "112" : "168"}
                height={isPageSmall ? "40" : "60"}
                alt={"AVALANCHEロゴ"}
              />
            </Link>
          </div>
          {/* Account Section */}
          {isPageSmall && (
            <div className={styles.header__container__accountSection}>
              <Link href="/profile">
                <FaUserAlt />{" "}
                <span>
                  {hasUser ? (currentUser?.displayName || cookies.User?.displayName) : "ゲスト"}
                </span>
              </Link>
            </div>
          )}
        </div>

        {/* Right Section */}
        <ul className={styles.header__container__links}>
          <div className={styles.header__container__menu}>
            {error && <p className="error">{error}</p>}
            <Link href="/">Home</Link>
            <Link href="https://t.co/P8Szd0Jf1h">Songs</Link>
            <Link href="/#live">Live</Link>
            <Link href="/about">About</Link>
            <Link href="/#contact">Contact</Link>
            {(cookies.User?.user || !currentUser) && (
              <>
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
              </>
            )}
            {(cookies.User?.user?.uid  === process.env.NEXT_PUBLIC_ADMIN_UID ||
              currentUser?.uid === process.env.NEXT_PUBLIC_ADMIN_UID) && (
                <Link href="/admin/live" className={styles.header__container__menu__adminIcon}>
                  <RiEditLine />
                </Link>
            )}
            {/* Account Section */}
            {!isPageSmall && (
              <Link
                href="/profile"
                className={styles.header__container__accountSection}
              >
                <FaUserAlt />{" "}
                <span>
                  {hasUser ? (currentUser?.displayName || cookies.User?.displayName) : "ゲスト"}
                </span>
              </Link>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
