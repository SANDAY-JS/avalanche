import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../StateProvider";
import { FaUserAlt } from "react-icons/fa";
import "./Header.css";

function Header() {
  const { currentUser, logout } = useAuth();
  const [menu, setMenu] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(true);
  const [error, setError] = useState("");
  const history = useHistory();

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
  //     history.push("/login");
  //   } catch {
  //     setError("ログアウトに失敗しました。");
  //   }
  // };

  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/" onClick={() => setMenu(false)}>
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
                    <Link to="login">Login</Link>
                    <Link to="signup">Sign Up</Link>
                  </>
                )}
                <Link to="/profile">
                  <FaUserAlt />{" "}
                  {currentUser ? currentUser.displayName : "ゲスト"}
                </Link>
              </div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/information">Information</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/information">Information</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/profile">
              <FaUserAlt /> {currentUser ? currentUser.displayName : "ゲスト"}
            </Link>
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
