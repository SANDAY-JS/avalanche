import React, { useState } from "react";
import styles from "../styles/pages/Profile.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "../assets/StateProvider";
import { FaUserAlt } from "react-icons/fa";
import { FiArrowUpCircle, FiArrowDownCircle } from "react-icons/fi";
import Layout from "../components/Layout";

export default function Profile() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [detail, setDetail] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setError("");

    const check = confirm("ログアウトしますか？");
    if (!check) return;

    try {
      await logout();
      router.push("/login");
    } catch {
      setError("ログアウトに失敗しました。");
    }
  };

  return (
    <Layout>
      <div className={styles.profile}>
        <h2>
          <FaUserAlt /> Your Profile
        </h2>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.profile__details}>
          {currentUser ? (
            <>
              <p>
                Your Name: <span>{currentUser.displayName}</span>
              </p>
              <p>
                Your Email: <span>{currentUser.email}</span>
              </p>
              <Link href="/update-profile">
                <a className={styles.editProfile}>登録情報を編集する</a>
              </Link>
              <a
                className={`${styles.btn} ${styles.signout}`}
                onClick={handleLogout}
              >
                Sign Out
              </a>
            </>
          ) : (
            <>
              <p className={styles.noUser}>アカウントが登録されていません。</p>
              <span onClick={() => setDetail(!detail)}>
                {detail ? <FiArrowUpCircle /> : <FiArrowDownCircle />} AVALANCHE
                アカウントとは？
              </span>
              {detail && (
                <p className={styles.detail}>
                  お名前とメールアドレスを登録するだけで、"AVALANCHEアカウント"に登録することができます。
                  <br />
                  AVALANCHEのライブに関する情報やグッズ情報などをいち早く知ることが出来ます。
                </p>
              )}
              <Link href="/signup">
                <a>新しくAVALANCHEアカウントを作る</a>
              </Link>
              <Link href="/signup">
                <a className={styles.btn}>Sign Up</a>
              </Link>
              <Link href="/login">
                <a>既にアカウントをお持ちですか？</a>
              </Link>
              <Link href="/login">
                <a className={styles.btn}>Login</a>
              </Link>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
