import { useContext, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const {loginUser, loginWithGoogle} = useContext(authContext)
    const [errorMessage, setErrorMessage] = useState('')
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const handleLoginForm = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log( email, password )

        loginUser(email, password)
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : "/")
        })
        .catch(error =>{
            console.log(error.message)
            setErrorMessage(error.message)
        })
    }

    const handleGoogleLogin = e =>{
        e.preventDefault()

        loginWithGoogle()
        .then(result =>{
            console.log(result)
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => {
            console.log(error.message)
        })
    }


    return (
        <div className="md:w-1/2 mx-auto my-24">
            <div className=" flex-col">
                <div className=" w-full bg-base-100">
                <div className="text-center lg:text-left">
                    <h1 className="md:ml-5 text-3xl font-bold">Login now!</h1>
                </div>
                    <form onSubmit={handleLoginForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {
                                errorMessage && <p className="text-red-500">*{errorMessage}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="font-medium text-center">Don&#39;t Have An Acount? <Link className="font-bold" to="/register">Register Now!</Link></p>
                    <p className="text-center">Or</p>
                    <div className="card-body border-t-2">
                        <button className="btn" onClick={handleGoogleLogin}><FcGoogle className="text-xl"></FcGoogle>Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;