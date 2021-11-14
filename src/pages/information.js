import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";
import img from "../../public/images/band_purple.jpg";
import styles from "../styles/pages/Information.module.css";
import Layout from "../components/Layout";

function Information({ blog }) {
  console.log("blog", blog);

  return (
    <Layout>
      <div className={styles.information}>
        <figure>
          <h2>Live Information</h2>
          <Image src={img} alt="avalanche-shiga" />
        </figure>
        <div className={styles.information__table}>
          <h3>ライブ予定↓</h3>
          <p>イベント名：10th Anniversary ~Lefa~ 次代へつなぐ道</p>
          <p>日時：1月23日</p>
          <p>場所：木之本スティックホール</p>
          {/* <small>＊詳細は後ほど掲載いたします。</small> */}
          <p>出演時間：後ほどお知らせ致します</p>
        </div>
      </div>
    </Layout>
  );
}

export default Information;

export async function getStaticProps() {
  // get files fron the post directly
  const files = fs.readdirSync(path.join("posts"));

  console.log("files>>>", files);

  // get slug and frontmatter from posts
  const blog = files.map((filename) => {
    // create slug
    const slug = filename.replace(".js", "");

    // get formatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      blog,
    },
  };
}
