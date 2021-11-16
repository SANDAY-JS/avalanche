import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase";

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
  const signup = async (email, password, name) => {
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      return await result.user.updateProfile({ displayName: name });
    } catch (e) {
      return console.error(e);
    }
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    await auth
      .signOut()
      .then(() => {
        console.log("Succcessfully signed out");
      })
      .catch((e) => {
        console.error("サインアウト失敗", e);
      });
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

  // update draft in information page
  const updateInformationDraft = async (draft) => {
    return await db.collection("draft").doc("information").set({
      eventName: draft.eventName,
      date: draft.date,
      time: draft.time,
      place: draft.place,
      detail: draft.detail,
    });
  };

  // get draft for information page
  // const getInformationDraft = () => {
  //   const draftRef = db.ref("draft/information");
  //   if (!draftRef) return;
  //   return draftRef;
  // };

  const authValue = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateName,
    updateEmail,
    updatePassword,
    updateInformationDraft,
    // getInformationDraft,
  };

  return (
    <AuthProvider.Provider value={authValue}>{children}</AuthProvider.Provider>
  );
}
