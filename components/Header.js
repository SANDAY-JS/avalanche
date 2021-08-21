import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/components/Header.module.css";
import { useAuth } from "../assets/StateProvider";
import { FaUserAlt } from "react-icons/fa";
// import { useRouter } from "next/router";

function Header() {
  const { currentUser, logout } = useAuth();
  const [menu, setMenu] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(true);
  const [error, setError] = useState("");
  // const router = useRouter();

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
  }, []);

  const checkWidth = () => {
    const match = window.matchMedia("(max-width: 767px)");
    if (match.matches) return setDeviceWidth(true);
    if (!match.matches) return setDeviceWidth(false);
  };

  // ↓ You can set 'logout' anytime.

  // const handleLogout = async () => {
  //   setError("");

  //   try {
  //     await logout();
  //     router.push("/login");
  //   } catch {
  //     setError("ログアウトに失敗しました。");
  //   }
  // };

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Link href="/" onClick={() => setMenu(false)}>
          <a>
            <h1>AVALANCHE</h1>
          </a>
        </Link>
      </div>
      <ul className={styles.header__links} onClick={() => setMenu(!menu)}>
        {deviceWidth ? (
          <>
            <span className={menu ? styles.active : undefined}></span>
            <div
              className={
                menu
                  ? `${styles.header__menu} ${styles.active}`
                  : styles.header__menu
              }
            >
              {error && <p className="error">{error}</p>}
              <div className={styles.signinForm}>
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
                <Link href="/profile">
                  <a>
                    <FaUserAlt />{" "}
                    {currentUser ? currentUser.displayName : "ゲスト"}
                  </a>
                </Link>
              </div>
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
            </div>
          </>
        ) : (
          <>
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
                <FaUserAlt /> {currentUser ? currentUser.displayName : "ゲスト"}
              </a>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
