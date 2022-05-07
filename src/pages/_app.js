import React, { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

import StateProvider from "../assets/StateProvider";
import * as ga from "../lib/ga";
import "../styles/globals.css";
import Meta from "../components/seo/Meta";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Meta />
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </>
  );
}

export default MyApp;
