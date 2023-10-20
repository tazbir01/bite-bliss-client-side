import { useContext, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import {Link, useNavigate} from 'react-router-dom';
import swal from "sweetalert";



const Register = () => {
    const {creatUser, loginWithGoogle} = useContext(authContext)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const navigate = useNavigate()

    const handleRegisterForm = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name , email, password, photo)

        setPasswordErrorMessage('')

        if(password.length < 6){
            return setPasswordErrorMessage('Please give more than 6 character password.')
        }else if(! /[A-Z]/.test(password)){
            return setPasswordErrorMessage('Please add any capital letter.')
        }else if(! /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)){
            return setPasswordErrorMessage('Please add any speacial character.')
        }

        creatUser(email, password)
        .then(result => {
            console.log(result.user)

            updateProfile(result.user, {
                displayName: name,
                photoURL: photo
            })
            swal("Successfully register", "Login now!", "success");
        })
        .catch(error =>{
            console.log(error.message)
            setPasswordErrorMessage(error.message)
        })
    }

    const handleGoogleLogin = e =>{
        e.preventDefault()

        loginWithGoogle()
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div className="  bg-base-200">
            <div className=" flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Register now!</h1>
                </div>
                <div className=" w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleRegisterForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo url..." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />                          
                            {
                                passwordErrorMessage && <p className="text-red-600">*{passwordErrorMessage}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="font-medium text-center">Have An Acount? <Link className="font-bold" to="/login">Login</Link></p>
                    <div>
                    <button onClick={handleGoogleLogin}>Login With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;