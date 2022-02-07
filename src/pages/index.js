import React from "react";
import Head from "next/head";
// components
import Layout from "../components/Layout";
// pages
import TopPage from "./topPage";

export default function Home({}) {
  return (
    <>
      <div id="root">
        <Head>
          <title>AVALANCHE</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="google-site-verification"
            content="dv7vUtP31o8L8bWGz3-PWxPBUn4HaEPH1Ql3KZAwO1U"
          />
        </Head>

        <Layout>
          <TopPage />
        </Layout>
      </div>
    </>
  );
}
