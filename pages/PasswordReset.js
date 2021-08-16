import React, { useRef, useState } from "react";
import { useAuth } from "./StateProvider";
import "../styles/pages/PasswordReset.module.css";

export default function PasswordReset() {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRef.current.value) return;

    setSuccess("");
    setError("");

    try {
      resetPassword(emailRef.current.value)
        .then(() => setSuccess("送信されました"))
        .catch(() => setError("指定されたメールアドレスが登録されていません"));
      setLoading(true);
    } catch {
      setError("送信に失敗しました");
    }

    setLoading(false);
  };

  return (
    <div className="password-reset">
      <h2>パスワードのリセット</h2>
      <p>
        ご指定のメールアドレスにパスワードを設定しなおすための通知メールが届きます。
      </p>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">メールアドレス</label>
        <input ref={emailRef} type="email" id="email" />
        <button type="submit" disabled={loading}>
          送信
        </button>
      </form>
    </div>
  );
}
