import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import StateProvider from "../StateProvider";

function Layout({ children }) {
  return (
    <StateProvider>
      <Header />
      {children}
      <Footer />
    </StateProvider>
  );
}

export default Layout;
