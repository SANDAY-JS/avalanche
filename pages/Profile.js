import React, { useState } from "react";
import "../styles/pages/Profile.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "./StateProvider";
import { FaUserAlt } from "react-icons/fa";
import { FiArrowUpCircle, FiArrowDownCircle } from "react-icons/fi";

export default function Profile() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [detail, setDetail] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      router.push("/login");
    } catch {
      setError("ログアウトに失敗しました。");
    }
  };

  return (
    <div className="profile">
      <h2>
        <FaUserAlt /> Your Profile
      </h2>
      {error && <p className="error">{error}</p>}
      <div className="profile__details">
        {currentUser ? (
          <>
            <p>
              Your Name: <span>{currentUser.displayName}</span>
            </p>
            <p>
              Your Email: <span>{currentUser.email}</span>
            </p>
            <Link className="edit-profile" href="/update-profile">
              <a>登録情報を編集する</a>
            </Link>
            <Link className="btn signout" href="/login" onClick={handleLogout}>
              <a>Sign Out</a>
            </Link>
          </>
        ) : (
          <>
            <p className="no-user">アカウントが登録されていません。</p>
            <span onClick={() => setDetail(!detail)}>
              {detail ? <FiArrowUpCircle /> : <FiArrowDownCircle />} AVALANCHE
              アカウントとは？
            </span>
            {detail && (
              <p className="detail">
                お名前とメールアドレスを登録するだけで、"AVALANCHEアカウント"に登録することができます。
                <br />
                AVALANCHEのライブに関する情報やグッズ情報などをいち早く知ることが出来ます。
              </p>
            )}
            <Link href="/signup">
              <a>新しくAVALANCHEアカウントを作る</a>
            </Link>
            <Link className="btn" href="/signup">
              <a>Sign Up</a>
            </Link>
            <Link href="/login">
              <a>既にアカウントをお持ちですか？</a>
            </Link>
            <Link className="btn" href="/login">
              <a>Login</a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
