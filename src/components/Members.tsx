import styles from "../styles/components/Members.module.scss";
import Member from "./Member";
import membersData from "../assets/memberInfomation";

const Members = (): JSX.Element => {
  return (
    <div className={styles.members}>
      <h3>Members</h3>
      <div className={styles.members__wrap}>
        <Member member={membersData.Shota} />
        <Member member={membersData.Tomoki} />
        <Member member={membersData.Yuto} />
        <Member member={membersData.Sun} />
      </div>
    </div>
  );
}

export default Members;
