import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from "../../firebase/firebase.config";

const auth = getAuth(app)

export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [loader, setLoader] = useState(true)

    const creatUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) =>{
            console.log('user in the state changed', user)
            setUser(user)
            setLoader(false)
        })
        return () => {
            unSubscribe()
        }
    })

    const loginUser =(email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () =>{
        setLoader(true)
        return signOut(auth)
    }

    const userInfo = {user, loader, creatUser, loginUser, logoutUser}

    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;