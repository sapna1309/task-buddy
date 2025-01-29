// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClzNcNPo3UiX7g30PLe5wPDsTQEzZl_qY",
    authDomain: "task-buddy-76e1e.firebaseapp.com",
    projectId: "task-buddy-76e1e",
    storageBucket: "task-buddy-76e1e.firebasestorage.app",
    messagingSenderId: "1024951568003",
    appId: "1:1024951568003:web:a9f9e75c711e568950bdb6",
    measurementId: "G-4NF3EMPDS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
    prompt: "select_account "
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);