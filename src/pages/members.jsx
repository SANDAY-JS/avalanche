import styles from "../styles/pages/Members.module.scss";
import Member from "../components/Member";
import membersData from "../assets/memberInfomation";
import Layout from "../components/Layout";

function Members() {
  return (
    <Layout>
      <div className={styles.members}>
        <h3>Members</h3>
        <div className={styles.members__wrap}>
          <Member member={membersData.Shota} />
          <Member member={membersData.Tomoki} />
          <Member member={membersData.Yuto} />
          <Member member={membersData.Sun} />
        </div>
      </div>
    </Layout>
  );
}

export default Members;
