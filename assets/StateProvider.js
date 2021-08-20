import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthProvider = createContext();

export const useAuth = () => {
  return useContext(AuthProvider);
};

export default function StateProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // Auth Methods
  const signup = (email, password, name) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => result.user.updateProfile({ displayName: name }))
      .catch((e) => console.error(e));
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updateName = (name) => {
    return currentUser.updateProfile({ displayName: name });
  };

  const updateEmail = (email) => {
    return currentUser.updateEmail(email);
  };

  const updatePassword = (password) => {
    return currentUser.updatePassword(password);
  };

  const authValue = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateName,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthProvider.Provider value={authValue}>{children}</AuthProvider.Provider>
  );
}
