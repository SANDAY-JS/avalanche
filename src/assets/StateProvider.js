import React, { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { auth, db } from "../../firebase";

const isProduction = process.env.NODE_ENV === "production";

const AuthProvider = createContext();

export const useAuth = () => {
  return useContext(AuthProvider);
};

export default function StateProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [cookies, setCookie] = useCookies([]);

  const setCookieToUser = () => {
    setCookie('User', currentUser, { path: '/' });
 };

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
      await result.user.updateProfile({ displayName: name }).then(() => setCookieToUser()).catch((err) => console.error(err));
      return;
    } catch (e) {
      return console.error(e);
    }
  };

  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then(() => setCookieToUser());
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

  /** Firebase Methods */
  const deleteEvent = async (event) => {
    return await db.collection(isProduction ? "live_info" : "draft").doc(event.date)?.delete().then(() => {
      console.log('deleted!')
    }).catch((err) => console.error(err))
  };

  // Add / Update New Live Event
  const addOrUpdateEvent = async (draft, oldDate) => {
    if(oldDate) {
      await db.collection(isProduction ? "live_info" : "draft").doc(oldDate)?.delete().then(() => {
        console.log('deleted!')
      }).catch((err) => console.error('削除に失敗しました', err))
    }

    return await db.collection(isProduction ? "live_info" : "draft").doc(draft.date)
      .set({
        eventName: draft.eventName,
        date: draft.date,
        time: draft.time,
        place: draft.place,
        detail: draft.detail.replace(/\n/g, "<br>"),
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
    addOrUpdateEvent,
    deleteEvent,
    setCookieToUser,
    cookies
    // getInformationDraft,
  };

  return (
    <AuthProvider.Provider value={authValue}>{children}</AuthProvider.Provider>
  );
}
