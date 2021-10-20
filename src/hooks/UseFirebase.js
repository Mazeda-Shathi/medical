import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


const UseFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.setUser);
            });

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }

        })

    }, [])
    //log out
    const logOut = () => {
        signOut(auth)
            .then(() => { });
    }


    return { user, logOut, signInUsingGoogle }
}
export default UseFirebase;