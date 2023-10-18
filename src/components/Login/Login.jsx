import { useContext, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";

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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                    <div>
                        <button onClick={handleGoogleLogin}>Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;