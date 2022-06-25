import styles from "../styles/pages/About.module.scss";
import Member from "../components/Member";
import membersData from "../assets/memberInfomation";
import Layout from "../components/Layout";
import img from "../../public/images/aboutus.webp";
import Image from "next/image";

function Members() {
  return (
    <Layout>
      <div className={styles.about}>
        <div className={styles.about__container}>
          <figure><Image src={img}/></figure>
          
          <div className={styles.about__band}>
            <h3>AVALANCHE</h3>
            <div>
              <p>滋賀県出身、大学生４人組バンド<br />大阪・京都など、関西のライブハウスを中心に活動中</p>
            </div>
          </div>

          {/* Members */}
          <div className={styles.members}>
            <h3>Members</h3>
            <div className={styles.members__wrap}>
              <Member member={membersData.Shota} />
              <Member member={membersData.Tomoki} />
              <Member member={membersData.Yuto} />
              <Member member={membersData.Sun} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Members;
