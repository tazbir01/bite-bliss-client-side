import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from "../../firebase/firebase.config";

const auth = getAuth(app)

export const authContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const creatUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {user, loader, creatUser}

    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;