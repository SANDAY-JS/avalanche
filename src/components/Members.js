import styles from "../styles/components/Members.module.css";
import Member from "./Member";
import membersData from "../assets/memberInfomation";

function Members() {
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
