import React, { useState } from "react";
import "./Profile.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../StateProvider";
import { FaUserAlt } from "react-icons/fa";
import { FiArrowUpCircle, FiArrowDownCircle } from "react-icons/fi";

export default function Profile() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [detail, setDetail] = useState(false);
  const history = useHistory();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/login");
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
            <Link className="edit-profile" to="/update-profile">
              登録情報を編集する
            </Link>
            <Link className="btn signout" to="/login" onClick={handleLogout}>
              Sign Out
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
            <Link to="/signup">新しくAVALANCHEアカウントを作る</Link>
            <Link className="btn" to="signup">
              Sign Up
            </Link>
            <Link to="/login">既にアカウントをお持ちですか？</Link>
            <Link className="btn" to="login">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
