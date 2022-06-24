import fb from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// if (firebase.initializeApp.length === 0) {
//   var app = firebase.initializeApp(config);
//   firebase.analytics();
// }

// export default app;
// export const auth = app?.auth();
// export const db = firebase?.firestore();

export const firebase = !fb.apps.length ? fb.initializeApp(config) : fb.app();
export const auth = firebase.auth();
export const db = firebase.firestore();