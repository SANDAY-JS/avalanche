import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../../styles/pages/admin/AdminHeader.module.scss";

const AdminHeader = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    console.log(currentPath);
  }, []);

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
          <li
            style={
              currentPath === "/admin" ? { textDecoration: "underline" } : {}
            }
          >
            <Link href="/admin">
              <a>News</a>
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
              <a>Live</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;
