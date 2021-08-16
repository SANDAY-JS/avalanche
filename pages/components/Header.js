import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../StateProvider";
import { FaUserAlt } from "react-icons/fa";
import "./Header.module.css";

function Header() {
  const { currentUser, logout } = useAuth();
  const [menu, setMenu] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
  }, []);

  const checkWidth = () => {
    const match = window.matchMedia("(max-width: 767px)");
    if (match.matches) return setDeviceWidth(true);
    if (!match.matches) return setDeviceWidth(false);
  };

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
    <div className="header">
      <div className="header__logo">
        <Link href="/" onClick={() => setMenu(false)}>
          <h1>AVALANCHE</h1>
        </Link>
      </div>
      <ul className="header__links" onClick={() => setMenu(!menu)}>
        {deviceWidth ? (
          <>
            <span className={menu ? "active" : ""}></span>
            <div className={menu ? "header__menu active" : "header__menu"}>
              {error && <p className="error">{error}</p>}
              <div className="signin-form">
                {!currentUser && (
                  <>
                    <Link href="/login">Login</Link>
                    <Link href="/signup">Sign Up</Link>
                  </>
                )}
                <Link href="/profile">
                  <a>
                    <FaUserAlt />{" "}
                    {currentUser ? currentUser.displayName : "ゲスト"}
                  </a>
                </Link>
              </div>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/information">Information</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </>
        ) : (
          <>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/information">Information</Link>
            <Link href="/contact">Contact</Link>
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
