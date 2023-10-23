import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import {Navigate, useLocation} from "react-router-dom"
const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(authContext)
    const location = useLocation()

    if(loader){
        return <>
            <div className="flex justify-center mt-20">
            <span className="loading loading-spinner loading-lg"></span>
            </div>
        </>
    }

    if(user){
        return children;
    }
    
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;