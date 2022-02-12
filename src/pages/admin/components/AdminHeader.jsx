import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/pages/admin/AdminHeader.module.scss";

const AdminHeader = () => {
  return (
    <div className={styles.adminHeader}>
      <div className={styles.adminHeader__innerBox}>
        <Link href="/">
          <a>
            <Image src="/images/logo.png" width="140" height="50" />
          </a>
        </Link>
        <h2>管理者ページ</h2>

        <ul className={styles.adminHeader__innerBox__linksContainer}>
          <li>
            <Link href="/admin">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/admin/live">
              <a>Live</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;
