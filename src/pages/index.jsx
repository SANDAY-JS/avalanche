import React from "react";
// components
import Layout from "../components/Layout";
// pages
import TopPage from "../components/TopPage";
import Live from "../components/Live";
import Sns from "../components/Sns";
import News from "../components/News";
import Contact from "../components/Contact";

export default function Home({}) {
  return (
    <>
      <div id="root">
        <Layout>
          <TopPage />
          <Live />
          <Sns />
          <News />
          <Contact />
        </Layout>
      </div>
    </>
  );
}
