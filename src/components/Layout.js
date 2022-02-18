import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import styles from "../styles/components/Layout.module.scss";

function Layout({ isNotTopPage, children }) {
  return (
    <>
      <Header />
      <div className={!isNotTopPage ? styles.container : styles.isNotTopPage}>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
