import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/Firebase.init";
initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            });

    }


    //log out
    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}));
    }

    // useEffect(() => {
    //     onAuthStateChanged(auth, user => {
    //         if (user) {
    //             setUser(user);
    //         }
    //     })

    // }, [])

    return { user, logOut, signInUsingGoogle }
}
export default UseFirebase;