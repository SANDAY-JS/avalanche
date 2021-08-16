import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopPage from "./TopPage";
import StateProvider from "./StateProvider";

export default function Home({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <>
      <StateProvider>
        <div id="root">
          <Head>
            <title>AVALANCHE</title>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
          </Head>

          <Header />
          {router.pathname === "/" && <TopPage />}

          <a href={href} onClick={handleClick}>
            {children}
          </a>
          <Footer />
        </div>
      </StateProvider>
    </>
  );
}
