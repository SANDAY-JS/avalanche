import React from "react";
import StateProvider from "../assets/StateProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;