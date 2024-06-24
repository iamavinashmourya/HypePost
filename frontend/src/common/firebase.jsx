import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDAPM7cGQnxCsDhfFt518QW0NPalonnmKw",
  authDomain: "hypepost-98463.firebaseapp.com",
  projectId: "hypepost-98463",
  storageBucket: "hypepost-98463.appspot.com",
  messagingSenderId: "700705967269",
  appId: "1:700705967269:web:01c7a10db47768a399d14c"
};

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err);
    })

    return user;

}