import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../assets/StateProvider";
import styles from "../styles/pages/SignInForm.module.css";
import Layout from "./components/Layout";

export default function Login() {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      router.push("/profile");
    } catch {
      setError("入力内容に誤りがあります");
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div className={styles.login}>
        <div className={styles.login__container}>
          <h2>Login</h2>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" />
            <label htmlFor="password">password</label>
            <input ref={passwordRef} type="password" id="password" />
            <button disabled={loading} type="submit">
              Login
            </button>
          </form>
          <Link href="/password-reset">
            <a>パスワードをお忘れの場合</a>
          </Link>
          <Link href="/signup">
            <a>アカウントをお持ちでない方</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
