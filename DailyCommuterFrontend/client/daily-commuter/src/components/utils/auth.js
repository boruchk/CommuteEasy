// import { auth } from "./firebase_client"; // import the firebase client you set up
// import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from "./firebase_config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";

export const handleCreateUserWithEmailAndPassword = async (formFields) => {
  const { email, password } = formFields;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const handleSigninWithEmailAndPassword = async (formFields) => {
  const { username, password } = formFields;
  signInWithEmailAndPassword(auth, email, password);
};

export const handleSignInWithGoogle = async () => {
  console.log("google fired");
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  return result;
};

export const handleSignOut = () => {
  console.log("signing out");
  return auth.signOut();
};
//

// Handles login with email/password

export const handleLogin = (formFields) => {
  const { username, password } = formFields;
  console.log(formFields);

  // signInWithEmailAndPassword(auth, username, password)
  //   .then((userCredential) => {
  //     console.log("Login successful:", userCredential.user);
  //   })
  //   .catch((error) => {
  //     console.error("Login error:", error.message);
  //   });
};

// Handles signup, sends to backend
export const handleSignUp = (formFields) => {
  const { username, password, email } = formFields;
  console.log(formFields);

  // fetch("http://localhost:5000/api/signup", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ username, password, email }),
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     if (data.error) {
  //       console.error("Signup error:", data.error);
  //     } else {
  //       console.log("Signup successful:", data);
  //     }
  //   })
  //   .catch((error) => {
  //     console.error("Signup request error:", error);
  //   });
};

// Handles login with Google
export const loginWithGoogle = () => {
  // const provider = new GoogleAuthProvider();
  // signInWithPopup(auth, provider)
  //   .then((result) => {
  //     console.log("Google login successful:", result.user);
  //   })
  //   .catch((error) => {
  //     console.error("Google login error:", error.message);
  //   });
};
