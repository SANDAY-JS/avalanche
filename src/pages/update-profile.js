import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../assets/StateProvider";
import { useRouter } from "next/router";
import styles from "../styles/pages/SignInForm.module.scss";
import Layout from "../components/Layout";

export default function UpdateProfile() {
  const { currentUser, updatePassword, updateName, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(currentUser ? currentUser.displayName : "");
  const [email, setEmail] = useState(currentUser ? currentUser.email : "");
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const router = useRouter();

  useEffect(() => {
    if (currentUser !== undefined) {
      return () => {
        setName(currentUser.displayName);
        setEmail(currentUser.email);
      };
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("パスワードが一致しません");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (nameRef.current.value !== currentUser.displayName) {
      promises.push(updateName(nameRef.current.value));
    }
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    await Promise.all(promises)
      .then(() => {
        router.push("/profile");
      })
      .catch(() => {
        setError("更新に失敗しました");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Layout isNotTopPage={true}>
      <div className={styles.update_profile}>
        <div className={styles.update_profile__container}>
          <h2>アカウントの更新</h2>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              ref={nameRef}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              placeholder="変更する場合のみ入力"
            />
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input
              type="password"
              id="passwordConfirmation"
              ref={passwordConfirmRef}
              placeholder="変更する場合のみ入力"
            />
            <button disabled={loading} type="submit">
              更新する
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
