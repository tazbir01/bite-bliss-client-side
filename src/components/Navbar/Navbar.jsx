import { useContext} from 'react';
import { NavLink, Link } from 'react-router-dom'
import { authContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { logoutUser, user } = useContext(authContext)

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addproduct">Add Product</NavLink></li>
        <li><NavLink to="/mycart">My Cart</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
    </>

    const handleLogout = e => {
        e.preventDefault()
        logoutUser()
    }

    return (
        <div className="fixed top-0 w-full bg-base-100 shadow-lg z-10">
            <div className="navbar  max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                            <Link onClick={handleLogout} className="border-l-2 pl-2">Logout</Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost bg-orange-100 text-red-700 font-bold normal-case text-xl">BiteBliss</a>
                    <div className="navbar-center hidden ml-10 lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                </div>

                <div className="navbar-end">
                    {
                        user ? <div className='flex items-center gap-2 rounded-full px-3 py-1'>
                            <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                            <p className='text-xl font-bold hidden md:block'>{user.displayName}</p>
                            <Link onClick={handleLogout} className="border-l-2 pl-2 hidden md:block">Logout</Link>
                        </div>
                            : <Link to="/login">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;