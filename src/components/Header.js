import React, { useState } from "react";
import useLayoutEffect from "../assets/useIsomorphicLayoutEffect";
import Image from "next/image";
import Link from "next/link";
import { AiFillEdit } from "react-icons/ai";
import { useAuth } from "../assets/StateProvider";
import { FaUserAlt } from "react-icons/fa";
import styles from "../styles/components/Header.module.scss";
// import { useRouter } from "next/router";

function Header() {
  const { currentUser, logout } = useAuth();
  const [menu, setMenu] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(true);
  const [error, setError] = useState("");
  // const router = useRouter();

  useLayoutEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
  }, []);

  const checkWidth = () => {
    const match = window.matchMedia("(max-width: 767px)");
    if (match.matches) return setDeviceWidth(true);
    return setDeviceWidth(false);
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
      <div className={styles.header__container}>
        <div className={styles.header__container__logo}>
          <Link href="/" onClick={() => setMenu(false)}>
            <a>
              {/* <h1>AVALANCHE</h1> */}
              <Image
                className={styles.logo}
                src={"/images/logo.png"}
                width="140"
                height="50"
              />
            </a>
          </Link>
        </div>
        <ul
          className={styles.header__container__links}
          onClick={() => setMenu(!menu)}
        >
          {deviceWidth ? (
            <>
              <span className={menu ? styles.active : ""}></span>
              <div
                className={
                  menu
                    ? `${styles.header__container__menu} ${styles.active}`
                    : styles.header__container__menu
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

                {currentUser?.uid === process.env.NEXT_PUBLIC_ADMIN_UID && (
                  <Link href="/admin/information">
                    <a>イベント情報を編集</a>
                  </Link>
                )}
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
              {currentUser?.uid === process.env.NEXT_PUBLIC_ADMIN_UID && (
                <Link href="/admin/information">
                  <a className={styles.header__container__menu__admin}>
                    <AiFillEdit />
                  </a>
                </Link>
              )}
              <Link href="/profile">
                <a>
                  <FaUserAlt />{" "}
                  {currentUser ? currentUser.displayName : "ゲスト"}
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
