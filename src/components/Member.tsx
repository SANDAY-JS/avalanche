import { useLayoutEffect, useState } from "react";
import styles from "../styles/pages/About.module.scss";

type Props = {
  member: Member;
}

const Member = ({ member }: Props): JSX.Element => {
  const [des, setDes] = useState<string[]>([])

  useLayoutEffect(() =>{
    if(!member?.des) return;
    const newdes = member.des.split(' ');
    setDes(newdes)
  }, [member])

  return (
    <div className={styles.member}>
      <div className={styles.member__infoWrapper}>
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
      </div>

      {/* Image */}
      <figure className={styles.member__imgWrap}>
        {/* <Image src={String(member.image)} layout={'fill'} objectFit={'contain'} blurDataURL={member.image} /> */}
        <img src={member.image} srcSet={member.image} />
      </figure>

      {des && <div className={styles.member__des}>
        {des.map((str, i) => (<p  key={i}>{str}</p>))}
        </div>}
    </div>
  );
}

export default Member;
