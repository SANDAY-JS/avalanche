import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { MdDeleteSweep } from "react-icons/md";
import styles from "../../styles/pages/admin/CurrentEvents.module.scss";
import Link from "next/link";

const CurrentEvents = () => {
  const router = useRouter();

  const [news, setNews] = useState([]);
  const [newNews, setNewNews] = useState();
  const [newUrl, setNewUrl] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    await axios
      .get("../../api/news")
      .then((res) => {
        console.log(res.data);
        setNews(res.data);
      })
      .catch((err) => console.error(err));
  };

  const addNews = async (e) => {
    e.preventDefault();
    if (!newNews) return console.log("No New Data");
    setSubmitting(true);

    const submitStatus = {
      type: "ADD",
      news: newNews,
      url: newUrl ?? null,
    };
    await axios
      .post("../../api/news", submitStatus)
      .then((res) => {
        console.log(res.data);
        if (res.data) router.reload();
      })
      .catch((err) => setError(err));
  };
  const deleteNews = async (index) => {
    if (index === undefined) return console.log("No Index");
    if (!confirm("このニュースを削除しますか？")) return;

    const submitStatus = {
      type: "DELETE",
      index: index,
    };

    await axios
      .post("../../api/news", submitStatus)
      .then((res) => {
        console.log(res.data);
        if (res.data) router.reload();
      })
      .catch((err) => setError(err));
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.container__hint}>ニュース一覧</h4>
      {news.map((item, index) => (
        <div key={index} className={styles.container__newsItem}>
          {item.url ? (
            <>
              <Link href={item.url}>
                {item.text}
              </Link>
              <MdDeleteSweep onClick={() => deleteNews(index)} />
            </>
          ) : (
            <>
              <p>{item.text}</p>
              <MdDeleteSweep onClick={() => deleteNews(index)} />
            </>
          )}
        </div>
      ))}
      <hr style={{ margin: "2rem 0" }} />
      <h4 className={styles.container__hint}>ニュースの追加↓</h4>
      {error && <p>{error}</p>}
      <form className={styles.container__form} onSubmit={addNews}>
        <textarea
          cols="30"
          rows="10"
          placeholder="例：【速報】新曲”ぞうさん”リリース決定！"
          onChange={(e) => setNewNews(e.target.value)}
        />
        <label htmlFor="url">
          テキストをUrl化する場合入力↓
          <input
            id="url"
            type="url"
            placeholder="https://..."
            onChange={(e) => setNewUrl(e.target.value)}
          />
        </label>
        <Button type={"submit"} variant="contained" disabled={submitting}>
          ニュースを追加する
        </Button>
      </form>
    </div>
  );
};

export default CurrentEvents;
