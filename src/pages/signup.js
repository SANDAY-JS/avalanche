import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAuth } from "../assets/StateProvider";
import styles from "../styles/pages/SignInForm.module.scss";
import Layout from "../components/Layout";

export default function SignUp() {
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("パスワードが一致しません");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );
      router.push("/profile");
    } catch {
      setError("入力内容に誤りがあります");
    }

    setLoading(false);
  };

  return (
    <Layout isNotTopPage={true}>
      <div className={styles.signup}>
        <div className={styles.signup__container}>
          <h2>Sign Up</h2>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input ref={nameRef} type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" />
            <label htmlFor="password">password</label>
            <input ref={passwordRef} type="password" id="password" />
            <label htmlFor="passwordConfirmation">password confirmation</label>
            <input
              ref={passwordConfirmRef}
              type="password"
              id="passwordConfirmation"
            />
            <button disabled={loading} type="submit">
              Sign Up
            </button>
          </form>
          <Link href="/login">
            <a>既にアカウントをお持ちですか？</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
