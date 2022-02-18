import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import styles from "../styles/components/Layout.module.scss";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
