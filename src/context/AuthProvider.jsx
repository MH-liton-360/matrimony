import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import app from "../firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = { user, setUser, createNewUser, userLogin, logOut };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;