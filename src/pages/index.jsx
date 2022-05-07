import React from "react";
import Head from "next/head";
// components
import Layout from "../components/Layout";
// pages
import TopPage from "../components/TopPage";
import Live from "../components/Live";
import About from "../components/About";
import Meta from "../components/seo/Meta";

export default function Home({}) {
  return (
    <>
      <div id="root">
        <Layout>
          <TopPage />
          <Live />
          <About />
        </Layout>
      </div>
    </>
  );
}
