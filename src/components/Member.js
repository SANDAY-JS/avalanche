import styles from "../styles/components/Members.module.css";

function Member({ member }) {
  return (
    <div className={styles.member}>
      {/* Name & Role */}
      <p className={styles.member__name__role}>
        {member.role} : {member.name}
      </p>

      {/* SNS */}
      <div className={styles.member__snsWrap}>
        <a
          href={member.twitter}
          target="_blank"
          className={styles.member__instagram}
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          href={member.instagram}
          target="_blank"
          className={styles.member__twitter}
        >
          <i className="fab fa-instagram" />
        </a>
      </div>

      {/* Image */}
      <figure className={styles.member__imgWrap}>
        <img src={member.image} />
      </figure>
    </div>
  );
}

export default Member;
