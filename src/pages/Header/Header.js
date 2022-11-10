import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import service from '../../assets/image/service.png'

const Header = () => {
    const { logOut, user } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch()


    }
    return (
        <div className="navbar bg-gray-200 shadow-2xl">

            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/signup'>Sing Up</Link></li>
                        <li><Link to='/services'>Services</Link></li>


                        {
                            user?.uid ?
                                <>
                                    <li><Link to='/reviews'>MyReview</Link></li>
                                    <li><Link to='/addservices'>AddServices</Link></li>
                                    <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                                </>
                                :
                                <li><Link to='/login'>Login</Link></li>
                        }

                    </ul>
                </div>
                <img className='w-12 h-12 ml-12  mx-0 rounded-full' src={service} alt="" />
                <p className=" text-xl sm:justify-end font-semibold text-purple-800 ml-12"><Link >special-food-service-review</Link></p>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/signup'>Sing Up</Link></li>


                    {
                        user?.uid ?
                            <>
                                <li><Link to='/reviews'>MyReview</Link></li>
                                <li><Link to='/addservices'>AddServices</Link></li>
                                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                            </>
                            :
                            <li><Link to='/login'>Login</Link></li>
                    }
                </ul>
            </div>


        </div>
    );
};

export default Header;