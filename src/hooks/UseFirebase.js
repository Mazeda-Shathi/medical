import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/Firebase.init";
initializeAuthentication();

const UseFirebase = () => {
    const [user, setUser] = useState({});


    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)


    }


    //log out
    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}));
    }


    //create new user
    const newUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                console.log(error);

            });


    }

    //signin/log in
    const logIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })

    }, [])

    return { user, logOut, signInUsingGoogle, newUser, logIn }
}
export default UseFirebase;