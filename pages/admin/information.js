import styles from "../../styles/pages/admin/information.module.scss";

const adminInformation = () => {
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
          className={styles.adminInformation__contents__input}
          name="contents"
          cols="50"
          rows="10"
        ></textarea>
      </div>
      <button className={styles.adminInformation__submit}>保存</button>
    </div>
  );
};

export default adminInformation;
