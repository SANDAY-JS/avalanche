import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/pages/admin/AdminHeader.module.scss";

const AdminHeader = (): JSX.Element => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className={styles.adminHeader}>
      <div className={styles.adminHeader__innerBox}>
        <Link href="/">
          <Image src="/images/logo.png" width="140" height="50" alt="AVALANCHEロゴ" />
        </Link>
        <h2>管理者ページ</h2>

        <ul className={styles.adminHeader__innerBox__linksContainer}>
          <li
            style={
              currentPath === "/admin" ? { textDecoration: "underline" } : {}
            }
          >
            <Link href="/admin">
              News
            </Link>
          </li>
          <li
            style={
              currentPath === "/admin/live"
                ? { textDecoration: "underline" }
                : {}
            }
          >
            <Link href="/admin/live">
              Live
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;