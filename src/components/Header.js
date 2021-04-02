import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menu, setMenu] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(true);

  useEffect(() => {
    checkWidth();
  }, []);

  const checkWidth = () => {
    const match = window.matchMedia("(max-width: 767px)");
    if (match.matches) return setDeviceWidth(true);
    if (!match.matches) return setDeviceWidth(false);
  };

  window.addEventListener("resize", checkWidth);

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
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
