import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBoZG66Ni3ComUy-HjCd0HiPCYxkTlPU_A",
  authDomain: "netflix-clone-3d4c0.firebaseapp.com",
  projectId: "netflix-clone-3d4c0",
  storageBucket: "netflix-clone-3d4c0.appspot.com",
  messagingSenderId: "917694388390",
  appId: "1:917694388390:web:4f99a3607a581083c53c67"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

const signup = async(name, email, password) => {

    try {
       const res = await createUserWithEmailAndPassword(auth, email, password)
       const user = res.user
       await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email
    })
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async(email, password) => {
    try {
       await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
        toast(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = () => {
    signOut(auth)
}

export { auth, db, login, signup, logout };