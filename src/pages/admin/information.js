import { useEffect, useRef, useState } from "react";
import styles from "../../styles/pages/admin/information.module.scss";

const adminInformation = () => {
  const draftRef = useRef(null);
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    if (!markdown.length) return;

    console.log("output>>>", markdown);
  }, [markdown]);

  const submitDraft = async () => {
    // convert text to markdown file (.md)
    if (!draftRef.current) return;
    const draft = draftRef.current.value;

    setMarkdown(draft);

    return await fetch("../../posts")
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className={styles.adminInformation}>
      <h2 className={styles.adminInformation__title}>Information Draft</h2>
      {/* <div className={styles.adminInformation__options}>
        <div className={styles.adminInformation__options__item}>
          <input type="color" />
        </div>
      </div> */}
      <div className={styles.adminInformation__contents}>
        <textarea
          ref={draftRef}
          className={styles.adminInformation__contents__input}
          name="contents"
          cols="50"
          rows="10"
        ></textarea>
      </div>
      <button className={styles.adminInformation__submit} onClick={submitDraft}>
        保存
      </button>
    </div>
  );
};

export default adminInformation;
