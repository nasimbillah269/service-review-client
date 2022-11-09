import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
    const { logOut, user } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch()


    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/signup'>Sing Up</Link></li>
                        <li><Link to='/reviews'>MyReview</Link></li>
                        <li><Link to='/addservices'>AddServices</Link></li>
                        {
                            user?.uid ? <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                                :
                                <li><Link to='/login'>Login</Link></li>
                        }

                    </ul>
                </div>
                <p className=" text-xl sm:justify-end"><Link >special-food-service-review</Link></p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/signup'>Sing Up</Link></li>
                    <li><Link to='/reviews'>MyReview</Link></li>
                    <li><Link to='/addservices'>AddServices</Link></li>
                    {
                        user?.uid ? <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                            :
                            <li><Link to='/login'>Login</Link></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {/* <Link className="btn">Get started</Link> */}
            </div>
        </div>
    );
};

export default Header;