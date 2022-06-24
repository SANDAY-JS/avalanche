import React from "react";
// components
import Layout from "../components/Layout";
// pages
import TopPage from "../components/TopPage";
import Live from "../components/Live";
import Sns from "../components/Sns";
import About from "../components/About";
import Contact from "../components/contact";

export default function Home({}) {
  return (
    <>
      <div id="root">
        <Layout>
          <TopPage />
          <Live />
          <Sns />
          <About />
          {/* <Contact /> */}
        </Layout>
      </div>
    </>
  );
}
